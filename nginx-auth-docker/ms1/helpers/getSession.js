const debug = require("debug")("app:getSession");
const fetch = require("node-fetch");
const signPayload = require("../helpers/signPayload");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

module.exports = async () => {
	debug("getting session");
	const getURL = process.env.SESSIONGETURL;

	const clientSecret = process.env.CLIENT_SECRET;
	debug(`using the bearer secret: ${clientSecret}`);

	const requestID = uuidv4();
	const body = { id: requestID };
	const sig = signPayload(body);
	debug(sig);
	debug(body);

	const headers = {
		Authorization: "Bearer j3dlr8jdpke2sh3rlrixzcd3svxo",
		"x-payload-signature": sig,
		"Content-Type": "application/json",
	};

	const options = {
		method: "POST",
		headers: headers,
		body: JSON.stringify(body),
	};

	const result = await (await fetch(getURL, options)).json();
	return result;
};
