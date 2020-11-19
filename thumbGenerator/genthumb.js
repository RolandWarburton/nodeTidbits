const ffmpeg = require("fluent-ffmpeg");
const ProgressBar = require("progress");
const debug = require("debug")("thumb:info");
const write = require("debug")("thumb:write");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { v4 } = require("uuid");
const { once, EventEmitter } = require("events");
require("dotenv").config();

const genFrame = async (ts, videoPath) => {
	const ee = new EventEmitter();
	const imageID = v4();
	try {
		ffmpeg(videoPath)
			.seekInput(ts)
			.output(`${process.env.CACHEDIR}/${imageID}.jpg`)
			.outputOptions(
				"-frames",
				"1" // Capture just one frame of the video
			)
			.on("end", function () {
				ee.emit("written", imageID);
			})
			.run();

		const [res] = await once(ee, "written");
		return `./cache/${res}.jpg`;
	} catch (err) {
		console.error(err);
	}
};

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
module.exports = async (videoPath, callback) => {
	const getmeta = promisify(ffmpeg.ffprobe);
	const stats = await getmeta(videoPath);
	const duration = stats.format.duration;
	const fspace = 60;

	// dont make thumbs for videos shorter then the frame spacer
	if (duration < fspace) {
		callback(false);
		return false;
	}

	const numberOfFrames = Math.floor(duration / 60);
	const timestamps = generateTimestamps(numberOfFrames, fspace);
	const videoPathBase = path.parse(videoPath).dir;
	const videoName = path.parse(videoPath).name;

	// create a progress bar
	const ssProgressBar = new ProgressBar(":etas :bar :percent", {
		total: numberOfFrames,
	});

	// store the filepaths to the cached single thumbnails
	const cachePlaceholders = [];

	// for each timestamp ffmpeg extract the frame and write it to cache
	for (const ts of timestamps) {
		cachePlaceholders.push(await genFrame(ts, videoPath));
		if (process.env.PROGRESSBAR) ssProgressBar.tick();
	}

	debug(`done caching ${cachePlaceholders.length} placeholders`);
	debug(`generating montage...`);

	// used to calculate a square for montage output tiles
	const sideLength = Math.round(numberOfFrames / 2);

	// generate and write the montage
	const writePath = `${videoPathBase}/${videoName}.png`;
	const montage = spawn(`montage`, [
		...cachePlaceholders,
		"-geometry",
		`+0+0`,
		"-tile",
		`x${sideLength}`,
		writePath,
	]);

	// when its finished generating a montage
	montage.on("close", (code) => {
		if (code != 0) {
			debug(`Error code ${code} when generating the montage`);
		} else {
			// clean up and delete the cached thumb files
			write(`Finished generating montage ${videoName}`);
			debug("cleaning up");
			for (filepath of cachePlaceholders) {
				fs.unlink(path.resolve(process.env.BASE, filepath), (err) => {
					if (err) console.log(err);
				});
			}

			// Run the callback with "all good"
			callback(true);
		}
	});
};
