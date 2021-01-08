const crypto = require("crypto");
require("dotenv").config();
const debug = require("debug")("app:crypto");

/**
 *
 * @param {JSON} body
 */
const signPayload = (body) => {
	const secret = process.env.CLIENT_SECRET;
	const jsonBody = body;
	let sig =
		"sha1=" +
		crypto
			.createHmac("sha1", secret)
			.update(JSON.stringify(jsonBody))
			.digest("hex");
	return sig;
};

module.exports = signPayload;
