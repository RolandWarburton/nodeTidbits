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

thumbs = async () => {
	// create the cache directory
	if (!fs.existsSync(process.env.CACHEDIR)) {
		fs.linkSync(process.env.CACHEDIR);
	}

	// read all the files
	const files = await readFiles();
	console.log(
		`${new Date().toISOString()}: read ${files.length} pending jobs`
	);

	// read in the completed jobs history
	const completed = fs
		.readFileSync(path.resolve(process.env.BASE, "completed"), "utf-8")
		.split("\n")
		.filter(Boolean);
	console.log(
		`${new Date().toISOString()}: read ${completed.length} completed jobs`
	);

	// loop through each file and process it
	for (const video of files) {
		debug(`processing ${video.fullPath}`);
		if (!completed.includes(video.fullPath)) {
			genthumbs(video.fullPath, (result) => {
				debug(`logged ${video.basename}`);
				fs.appendFileSync(
					path.resolve(process.env.BASE, "completed"),
					video.fullPath + "\n"
				);
				log(`Wrote thumbnail for ${video.basename}`);
			});
		} else {
			debug(`skipping ${video.basename}`);
		}
	}
};

thumbs();

module.exports = thumbs;
