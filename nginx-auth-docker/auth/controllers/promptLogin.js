const debug = require("debug")("app:promptLogin");

// Render the log in page
module.exports = async (req, res, next) => {
	console.log("prompting login");
	return res.status(200).render("login", {
		title: "login",
		success: true,
	});
};
