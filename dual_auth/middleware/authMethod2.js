const debug = require("debug")("app:auth2");
debug.color = 5;

const SECRET = "supersecret";

const auth2 = (req, res, next) => {
	debug("running auth2");
	if (res.locals.isAuthenticated == true) {
		debug("user was already authenticated");
		next();
	} else {
		const api_key = req.headers.api_key;
		debug(`received secret: "${secret}" from client`);

		// if the secret from the header matches our secret
		try {
			// throw an error if the auth is wrong
			if (api_key != SECRET) {
				debug("auth was wrong");
				throw {
					name: "auth_server",
					message:
						"auth key was incorrect. Include {auth: string} in the header",
				};
			}
			// all good
			debug("api key was correct");
			next();
		} catch (err) {
			throw err;
		}
	}
};

module.exports = auth2;
