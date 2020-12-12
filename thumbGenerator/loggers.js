const supportsColor = require("supports-color");
const fs = require("fs");
const path = require("path");

// base
const debug = require("debug")("thumb");
const error = require("debug")("error");

// extended modules
const info = debug.extend("info");
const write = debug.extend("write");

// colors for each module
// debug.color = "fff";

// check if 256 is supported
// make sure to be running xterm-256color or whatever
const supportsColorTest = () => {
	if (supportsColor.stdout.has256) {
		console.log("Terminal stdout supports 256 colors");
	} else {
		console.log("doesnt support 256 colors");
	}
};

// helper for log()
const getDate = () => {
	return new Date().toLocaleString("en-AU", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
};

// logging to a text file
const log = (message) => {
	fs.appendFileSync(
		path.resolve(process.env.BASE, "log.txt"),
		`${getDate()}: ${message}\n`
	);
	debug(`${getDate()}: ${message}`);
};

module.exports = { debug, info, write, error, supportsColorTest, log };
