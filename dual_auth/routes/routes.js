const express = require("express");

// middleware
const auth1 = require("../middleware/authMethod1");
const auth2 = require("../middleware/authMethod2");

const router = express.Router();

const routes = [
	{
		path: "/",
		method: "get",
		middleware: [auth1, auth2],
		handler: buildPage,
		help: {
			description: "route with two authentication methods",
			method: this.method,
			parameters: [],
			example: "/",
		},
	},
];
buildRouter(router, routes);
module.exports = router;
