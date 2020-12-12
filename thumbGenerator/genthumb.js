const ffmpeg = require("fluent-ffmpeg");
const ProgressBar = require("progress");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { debug, info, write, log } = require("./loggers");
const { once, EventEmitter } = require("events");
const genFrame = require("./genFrame");
require("dotenv").config();

const generateTimestamps = (numberOfFrames, fspace) => {
	const timestamps = [];
	for (const i of Array(numberOfFrames).keys()) {
		timestamps.push(
			new Date(i * fspace * 1000).toISOString().substr(14, 5) + ".00"
		);
	}
	return timestamps;
};

/**
 *
 * @param {String} videoPath Path to the video to generate a montage sheet for
 * @param {Function} callback Callback that returns true or false based once the montage has been written
 */
module.exports = async (videoPath) => {
	const getmeta = promisify(ffmpeg.ffprobe);
	const stats = await getmeta(videoPath);
	const duration = stats.format.duration;
	const fspace = 60;

	// dont make thumbs for videos shorter then the frame spacer
	const numberOfFrames = Math.floor(duration / 60);
	const videoPathBase = path.parse(videoPath).dir;
	const videoName = path.parse(videoPath).name;
	const timestamps = generateTimestamps(numberOfFrames, fspace);
	const writePath = `${videoPathBase}/${videoName}.png`.replace(/ /g, "_");

	if (duration < fspace) {
		return writePath;
	}

	// create a progress bar
	const ssProgressBar = new ProgressBar(":etas :bar :percent", {
		total: numberOfFrames,
	});

	// store the filepaths to the cached single thumbnails
	const cachePlaceholders = [];

	// for each timestamp ffmpeg extract the frame and write it to cache
	for (const ts of timestamps) {
		await genFrame(ffmpeg, ts, videoPath)
			.then((framePath) => {
				cachePlaceholders.push(framePath);
			})
			.catch((err) => {
				debug(err);
			});

		if (process.env.PROGRESSBAR) ssProgressBar.tick();
		// debug(`generated frame `)
	}

	debug(`done caching ${cachePlaceholders.length} placeholders`);

	// do a check to make sure if any images were successfully generated
	if (cachePlaceholders.length === 0) {
		info(
			`skipping ${videoName} because no placeholders were successfully generated`
		);
		return false;
	}

	debug(`generating montage...`);

	// used to calculate a square for montage output tiles
	const sideLength = Math.round(Math.sqrt(numberOfFrames));
	debug(
		`there are ${numberOfFrames} total frames so dimensions are ${sideLength}x${sideLength}`
	);

	// generate and write the montage
	// -geometry <width>x<height>+<border width>+<border height>{!}{<}{>}
	// -tile <width>x<height>
	const args = [
		...cachePlaceholders,
		"-geometry",
		`+0+0`,
		"-tile",
		`x${sideLength}`,
		writePath,
	];
	const montage = spawn(`montage`, args);

	// when its finished generating a montage this event emitter fires
	const ee = new EventEmitter();
	montage
		.on("close", (code) => {
			debug(`emitted close for ${writePath}`);
			if (code != 0) {
				debug(`Error code ${code} when generating the montage`);
			} else {
				ee.emit("complete", writePath);
				// clean up and delete the cached thumb files
				write(`Finished generating montage ${videoName}`);
				debug("cleaning up");
				for (filepath of cachePlaceholders) {
					fs.unlink(
						path.resolve(process.env.BASE, filepath),
						(err) => {
							if (err) console.log(err);
						}
					);
				}
			}
		})
		.on("error", (err) => {
			debug(err);
		});

	// if this following line is here then it will wait for the montage to finish generating before continuing
	// this stops the computer from dying if theres a lot of stuff to do
	await once(ee, "complete");
	return writePath;
};
