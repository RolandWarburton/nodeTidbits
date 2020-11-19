const genthumbs = require("./genthumb");
const readFiles = require("./readFiles");
const debug = require("debug")("thumb:info");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: "/home/roland/scripts/genthumbs/.env" });

const getDate = () => {
	return new Date().toLocaleString("en-AU", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
};

const log = (message) => {
	fs.appendFileSync(
		path.resolve(process.env.BASE, "log.txt"),
		`${getDate()}: ${message}\n`
	);
	debug(`${getDate()}: ${message}`);
};

log("Started logging");

// when the cache dir gets filled up run the following INSIDE the cache dir...
// ps -A | grep ffmpeg | awk '{print $1}' | xargs kill -9 $1
// for debugging purposes log where the cache is
log(`writing cache to ${process.env.CACHEDIR}`);

thumbs = async () => {
	debug("================================");
	debug(`Cache dir: ${process.env.CACHEDIR}`);
	debug(`Target: ${process.env.TARGET}`);
	debug(`Running from (basedir): ${process.env.BASE}`);
	debug("================================");

	// create the cache directory
	if (!fs.existsSync(process.env.CACHEDIR)) {
		debug("created cache dir");
		fs.linkSync(process.env.CACHEDIR);
	}

	// read all the files
	const pending = await readFiles();
	console.log(
		`${new Date().toISOString()}: read ${pending.length} pending jobs`
	);

	// read in the completed jobs history
	const completed = fs
		.readFileSync(path.resolve(process.env.BASE, "completed"), "utf-8")
		.split("\n")
		.filter(Boolean);
	console.log(
		`${new Date().toISOString()}: read ${completed.length} completed jobs`
	);

	// filter the required jobs we need to do by subtracting the completed jobs from the pending ones
	// for each value of the possible tasks
	const todo = pending.filter((value) => {
		// if task X does not exist within completed then return it
		if (!completed.includes(value)) return value;
	});

	// loop through each file and process it
	for (const video of todo) {
		debug(`processing ${video.fullPath}`);
		genthumbs(video.fullPath, (result) => {
			debug(`logged ${video.basename}`);
			fs.appendFileSync(
				path.resolve(process.env.BASE, "completed"),
				video.fullPath + "\n"
			);
			log(`Wrote thumbnail for ${video.basename}`);
		});
	}
};

thumbs();

module.exports = thumbs;
