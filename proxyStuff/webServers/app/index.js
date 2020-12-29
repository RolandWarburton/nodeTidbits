const express = require("express");

// note that PORT is not defined within the .env file on disk, rather we pass it in through docker-compose.yaml
require("dotenv").config();

// config app
const app = express();
app.set("view engine", "ejs");
const port = process.env.PORT;

// dont even bother running if theres no port set
if (!port) {
	throw new Error("no port specified");
}

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

app.use("/favicon.ico", express.static("./assets/favicon.ico"));

app.use((req, res, next) => {
	console.log("serving content");
	next();
});

app.get("*", (req, res, next) => {
	// return some information back to the browser
	return res.status(200).json({
		baseUrl: req.baseUrl,
		path: req.path,
		hostname: req.hostname,
		originalUrl: req.originalUrl,
		params: req.params,
		query: req.query,
	});
});
