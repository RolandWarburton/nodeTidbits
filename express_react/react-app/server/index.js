const path = require("path");
const express = require("express");
const checkSSORedirect = require("./middleware/checkSSORedirect");
const isAuthenticated = require("./middleware/isAuthenticated");
const debug = require("debug")("app:server");
const app = express(); // create express app
const session = require("express-session");

// app.use(isAuthenticated);
// app.use(());

// serve the react app
// app.use(express.static(path.join(__dirname, "..", "build")));

// app.use((req, res, next) => {
// 	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 100000,
		},
	})
);

app.use(checkSSORedirect());
app.use(express.json());

// serve the react app
app.use([isAuthenticated], express.static(path.join(__dirname, "..", "build")));

// serve some static assets in server/public for example server/public/users.json
app.use(express.static("public"));

// app.get("/", [isAuthenticated], (req, res) => {
// 	debug("r");
// 	express.static(path.join(__dirname, "..", "build"));
// });

// start express server on port 5000
app.listen(3000, () => {
	console.log("server started on port 3000");
	debug("hello world!");
});
