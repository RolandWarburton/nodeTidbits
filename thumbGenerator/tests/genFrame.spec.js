const genFrame = require("../genFrame");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

test("A generated frame returns its filepath", async () => {
	// expect something back after generating the file thats like:
	// /lacie/thumbCache/445b1119-da33-4ed3-b758-177dd25b2f65.jpg
	const expected = new RegExp(`${process.env.CACHEDIR}\/.*\.jpg`);
	const filepath = "/home/roland/scripts/genthumbs/tests/test video.mp4";
	const frame = await genFrame(ffmpeg, 60, filepath);
	expect(frame).toEqual(expect.stringMatching(expected));

	// read the file and make sure its there
	const file = fs.statSync(frame);
	expect(file.isFile()).toBe(true);
});
