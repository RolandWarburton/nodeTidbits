const fs = require("fs");
const readdirp = require("readdirp");

module.exports = async () => {
	const filepath = "/file/path/here";
	const options = {
		fileFilter: ["*.mp4"],
		depth: 1,
	};

	const files = [];

	for await (const entry of readdirp(filepath, options)) {
		if (!entry.path.includes("cut")) files.push(entry);
	}
	return files;
};
