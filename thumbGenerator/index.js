const genthumbs = require("./genthumbs");
const readFiles = require("./readFiles");
const debug = require("debug")("thumbgen");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

if (!fs.existsSync(process.env.CACHEDIR)) {
	fs.linkSync(process.env.CACHEDIR);
}

thumbs = async () => {
	const files = await readFiles();
	const completed = fs
		.readFileSync("./completed", "utf-8")
		.split("\n")
		.filter(Boolean);
	console.log("done reading files");

	for (const video of files) {
		debug(`processing ${video.fullPath}`);
		if (!completed.includes(video.fullPath)) {
			genthumbs(video.fullPath, (result) => {
				debug(`logged ${video.basename}`);
				fs.appendFileSync(
					path.resolve(process.env.BASE, "completed"),
					video.fullPath + "\n"
				);
			});
		} else {
			debug(`skipping ${video.basename}`);
		}
	}
};

thumbs();
