const { once, EventEmitter } = require("events");
const { v4 } = require("uuid");
const path = require("path");
const { debug, info, write, log } = require("./loggers");
const { rejects } = require("assert");

// it should take a full file path otherwise it breaks

const genFrame = async (ffmpeg, ts, videoPath) => {
	const ee = new EventEmitter();
	const imageID = v4();
	// debug(`generating frame ${imageID} for ${videoPath}`);
	return new Promise(async (resolve, reject) => {
		const proc = ffmpeg();
		proc.addInput(videoPath)
			.on("end", function () {
				ee.emit("written", imageID);
			})
			.on("error", (err) => {
				reject("FFMPEG failed");
			})
			.seekInput(ts)
			.output(`${process.env.CACHEDIR}/${imageID}.jpg`)
			.outputOptions(
				"-frames",
				"1", // Capture just one frame of the video
				"-vf",
				"scale=320:-1" // scale it down to something small (-1 maintain aspect ratio)
			)
			.run();

		const [res] = await once(ee, "written");
		// info(`${process.env.CACHEDIR}/${res}.jpg`);
		resolve(`${process.env.CACHEDIR}/${res}.jpg`);
	});
};

module.exports = genFrame;
