const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const bodyParser = require("body-parser");
const promptLogin = require("./controllers/promptLogin");
// const { genJwtToken } = require("./helpers/jwt_helper");
const signPayload = require("./helpers/signPyaload");
const cookieParser = require("cookie-parser");
const isAuthenticated = require("./middleware/isAuthenticated");
const assert = require("assert");
const processLogin = require("./controllers/processLogin");
const app = express();

// ##──── ejs rendering ─────────────────────────────────────────────────────────────────────
app.engine("ejs", engine);
app.set("views", "/usr/src/app/views");
app.set("view engine", "ejs");

// ##──── middleware ────────────────────────────────────────────────────────────────────────
app.use(cookieParser());

// the login form posts in urlencoded, not json
app.use(express.urlencoded({ extended: false }));

// ##──── listen on port ────────────────────────────────────────────────────────────────────
app.listen(8080, () => {
	if (process.env.NODE_ENV == "development")
		console.log("auth listening on 8080");
});

// This route can be hit by any client as part of the sub-request in nginx.
// The purpose of this route is to check the cookie in the browser and return 200 if its good,
// If there isnt any cookie then the isAuthenticated middleware will return 401
// and nginx will catch that http status and forward the user to /auth/promptlogin to log them in and assign a cookie to the browser
app.get("/auth", [isAuthenticated], (req, res, next) => {
	console.log("authenticated", new Date());
	return res.status(200).json({ status: 200 });
});

// render the login page
app.get("/auth/promptlogin", promptLogin);

// process logins
app.post("/auth/promptlogin", processLogin);
