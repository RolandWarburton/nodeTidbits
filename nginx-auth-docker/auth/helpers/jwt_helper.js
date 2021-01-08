const jwt = require("jsonwebtoken");
require("dotenv");

const genJwtToken = (payload, secret = "password") =>
	new Promise((resolve, reject) => {
		console.log(`signed with ${secret}`);
		jwt.sign(
			{ ...payload },
			secret,
			{
				expiresIn: "1h",
				issuer: process.env.ISSUER,
			},
			(err, token) => {
				if (err) return reject(err);
				return resolve(token);
			}
		);
	});

module.exports = Object.assign({}, { genJwtToken });
