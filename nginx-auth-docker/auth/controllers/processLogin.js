const assert = require("assert");
require("dotenv");
const { genJwtToken } = require("../helpers/jwt_helper");

// mock a database to validate the user against
const database = [{ email: "a@a", password: "a" }];

// mock a database query that just returns the user from the database
const findUser = (filter) => {
	return database[0];
};

module.exports = async (req, res, next) => {
	console.log("processing login");

	// The request that it caught by nginx will contain a serviceURL
	// which points back to where this request came from
	const serviceURL = req.query.serviceURL;

	try {
		// create a filter to find the user from the database
		const userFilter = {
			email: req.body.email,
			password: req.body.password,
		};

		// we then pass this filter into the "database" to get the user
		const user = findUser(userFilter);

		console.log({ email: user.email, password: user.password });
		console.log(userFilter);

		assert.deepStrictEqual(
			{ email: user.email, password: user.password },
			userFilter
		);

		// at this point we are authenticated, assert would have thrown us an error otherwise
		console.log("authenticated against deepequal success!");

		// using the user returned from the "database" we can create a payload body to sign a cookie with
		const payloadBody = {
			client: "testclient",
			user: "testuser",
			_id: "cacheid",
		};

		// generate a payload token and give the browser a cookie
		const payload = await genJwtToken(
			payloadBody,
			process.env.CLIENT_SECRET
		);
		res.cookie("user", payload, { domain: ".rolandw.dev" });

		// then redirect the user back to the service url with the cookie and a 200 so they dont have to reauthenticate in the future
		console.log(`redirecting to ${serviceURL}`);
		res.status(200);
		res.redirect(serviceURL);
	} catch (err) {
		// this block will be hit if the user details are incorrect or the user was not found etc
		console.log(err || "failed to assert user against database");

		// Instead of redirecting to the serviceURL
		// render the failed to log in page and use a 401
		// nginx will not redirect this because we are not accessing /ms1
		return res.status(401).render("authFail", {
			title: "login",
			message: "failed to log in",
			serviceURL: serviceURL,
		});
	}
};
