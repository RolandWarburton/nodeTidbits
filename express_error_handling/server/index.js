const express = require("express");
const debug = require("debug")("app:server");
const app = express();

const logger = (req, res, next) => {
	debug(req.path);
	next();
};

const throwSyncError = (req, res, next) => {
	throw new Error("u dun fucked up");
};

const throwAsyncError = (req, res, next) => {
	setTimeout(function () {
		try {
			throw new Error("BROKEN");
		} catch (err) {
			// ! Make sure you pass this error to express
			next(err);
		}
	}, 100);
};

app.get("/", [logger], (req, res, next) => {
	//   debug(req.path);
	return res.status(200).json({ success: true });
});

app.get("/sync_error", [logger, throwSyncError], (req, res, next) => {
	return res.status(200).json({ success: true });
});

app.get("/async_error", [logger, throwAsyncError], (req, res, next) => {
	return res.status(200).json({ success: true });
});

app.get("*", [logger], (req, res, next) => {
	return res.status(200).json({
		success: false,
		message: "404",
		baseUrl: req.baseUrl,
		host: req.host,
		hostname: req.hostname,
		originalUrl: req.originalUrl,
		path: req.path,
	});
});

module.exports = app;
