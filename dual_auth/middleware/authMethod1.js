const debug = require("debug")("app:auth1");
const jwt = require("jsonwebtoken");

const SECRET = "P@ssw0rd";

// just paste the cookie you get from route "/auth/login" here as "TOKEN"

// this token is correct and when passed will not throw an error
// TOKEN =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE2MDY5NzE0ODV9.yF-DtsEnLo72Z1HxSVc4iiAXvdd3aVJ29TQfkQ3jnUg";

TOKEN = undefined;

// this token is malformed and will return a jwt malformed error in the catch block
// const TOKEN = "wrongtoken";

// this token is wrong (but not malformed) and will return a jwt invalid signature error
// const TOKEN =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE2MDY5NzE0ODV9.yF-DtsEnLo72Z1HxSVc4iiAXvdd3aVJ29TQfkQwrong";

const auth1 = (req, res, next) => {
	debug("running auth1");
	const token = req.cookies.access_token;
	// const token = TOKEN;

	// debug(req.cookies);

	// if we dont have a token. IE. havent been provided one
	// then we just skip this middleware and go to the next to see
	if (!token) {
		debug("there was no token, skipping");
		next();
	}

	try {
		const decoded = jwt.verify(token, SECRET);

		// do something with the successfully decoded token
		if (decoded._id != "abc123") {
			debug("decoded token was incorrect");
			// throw a custom error for this
			next();
			// throw {
			// 	name: "auth_server",
			// 	message: "auth failed because wrong user details",
			// };
		}

		res.locals.isAuthenticated = true;
		// the token passed the lookup so we can now call next
		debug("decoded token was correct");
		next();
	} catch (err) {
		// throw the jwt decoding error
		// throw err;
		next();
	}
};

module.exports = auth1;
