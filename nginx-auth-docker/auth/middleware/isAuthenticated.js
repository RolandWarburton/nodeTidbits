const debug = require("debug")("app:isAuth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
	console.log("isAuthenticated middleware");

	// extract the token cookie
	const user = req.cookies.user;
	if (user) {
		console.log("user");
		try {
			// verify the token
			jwt.verify(user, process.env.CLIENT_SECRET);

			// if we verified the token successfully then keep going
			next();
		} catch (err) {
			// there was a token but it was incorrect or forged
			return res.status(401).json({ success: false });
		}
	} else {
		return res.status(401).json({ success: false });
	}
};

