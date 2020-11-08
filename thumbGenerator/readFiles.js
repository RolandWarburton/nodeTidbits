const readdirp = require("readdirp");
require("dotenv").config();

module.exports = async () => {
	const filepath = process.env.TARGET;
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
