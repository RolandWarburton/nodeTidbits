const crypto = require("crypto");
require("dotenv").config();

/**
 * sign a payload with a secret for later integrity verification
 * @param {JSON} body - The payload body
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
