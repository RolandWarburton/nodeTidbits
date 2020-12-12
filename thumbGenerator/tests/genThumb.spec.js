const genFrame = require("../genFrame");
const genThumb = require("../genthumb");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

test("We can create a thumbnail from a collection of thumb files", (done) => {
	// we give it a filepath to a video
	const filePath = "/home/roland/scripts/genthumbs/tests/test video.mp4";

	// we expect a filepath back to the generated thumbnail
	const expected = "/home/roland/scripts/genthumbs/tests/test_video.png";
	genThumb(filePath, (result) => {
		expect(result).toBe(expected);
		done();
	});
});
