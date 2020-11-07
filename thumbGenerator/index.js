const genthumbs = require("./genthumbs");
const readFiles = require("./readFiles");
const debug = require("debug")("thumbgen");
const fs = require("fs");

if (!fs.existsSync("./cache")) {
	fs.linkSync("./cache");
}

thumbs = async () => {
	const files = await readFiles();
	const completed = fs
		.readFileSync("./completed", "utf-8")
		.split("\n")
		.filter(Boolean);
	console.log(completed);
	console.log("done reading files");

	for (const video of files) {
		debug(`processing ${video.fullPath}`);
		if (!completed.includes(video.fullPath)) {
			genthumbs(video.fullPath, (result) => {
				debug(`logged ${video.basename}`);
				fs.appendFileSync("./completed", video.fullPath + "\n");
			});
		} else {
			debug(`skipping ${video.basename}`);
		}
	}
};

thumbs();
