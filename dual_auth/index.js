const express = require("express");
const debug = require("debug")("app");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const SECRET = "P@ssw0rd";
const APIKEY = "supersecret";

// user database
const users = [{ _id: "abc123", name: "roland", api_key: "supersecret" }];

// import this middleware
const auth1 = require("./middleware/authMethod1");
const auth2 = require("./middleware/authMethod2");

// create the app
const app = express();
const port = 3000;

// use this middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "devel:3000", credentials: true }));

// login logic middleware
// to demonstrate the functionality of both authentication methods this login method allows both types indicated with the "typ" header
// "typ" can be either "api_key" or "cred"
// typ: "cred" = _id and name is in the JSON body and a JWT cookie is given back to the client
// typ: "api_key" = secret service-to-service key provided with "api_key": "myapikey" in the header
app.post("/auth/login", (req, res) => {
	debug("logging in");
	_id = req.body._id;
	name = req.body.name;
	api_key = req.headers.api_key;
	typ = req.headers.typ;

	// if no typ is provided then we dont know if we are authenticating with "cred" or "api_key"
	if (!typ) {
		debug("no typ included in header");
		throw {
			name: "auth_server",
			message:
				"no authentication type specified, include {typ: 'cred' || 'api_key'} in the header",
		};
	}

	switch (typ) {
		case "api_key":
			// validate the api key
			debug(`validating by api key ${api_key}`);
			if (api_key != APIKEY) {
				throw { name: "auth_server", message: "API key is incorrect" };
			}

			// lookup the client related to this api key in the "database"
			res.locals.user = users.find((user, index) => {
				if (user.api_key == api_key) return user;
			});
			debug("api key was correct");
			break;

		case "cred":
		default:
			// validate the user
			// you would lookup the user by its ID in your "database" here but for simplicity ive
			// hardcoded the users details
			debug("validating by user details");
			if (_id != "abc123" && name != "roland") {
				throw {
					name: "auth_server",
					message: "User information is incorrect",
				};
			}

			// lookup the client related to the _id in the "database"
			res.locals.user = users.find((user, index) => {
				if (user._id == _id) return user;
			});
			debug("user was correct");
			break;
	}

	// print out the user
	debug(`the user is ${JSON.stringify(res.locals.user)}`);

	// create a payload for the jwt token
	debug("creating payload");
	const payload = {
		_id: _id,
	};

	// create a token
	debug("creating token");
	const token = jwt.sign(payload, SECRET);

	// create a cookie out of the jwt token
	// the cookie is "unsigned"
	debug("creating cookie");
	res.cookie("access_token", token, {
		maxAge: 3600,
		httpOnly: true,
		sameSite: "lax",
	});

	// try sure to not return the full res.locals.user in production
	// however for clarity its returned here
	debug("returning cookie and user details");
	return res.status(200).json({
		success: true,
		cookie: token,
		...res.locals.user,
	});
});

// we login here
app.get("/auth/login", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./index.html"));
});

// this route is protected by two types of authentication
// auth1 is JWT authentication
// auth2 is api_key authentication
// they communicate with each other using res.locals.isAuthenticated
// if EITHER middleware sets isAuthenticated = true then the user is considered authenticated
// ========================================================================
// this allows the client to be logged in first if they want to use JWT, if not they are passed to auth2 (api_key)
app.get("/", [auth1, auth2], (req, res) => {
	return res.status(200).json({ success: true });
});

app.listen(port, () => {
	debug(`listening on ${port}`);
});

// error handler that picks up errors that are thrown
app.use(function (err, req, res, next) {
	debug("error handler:");
	console.error(err.stack);
	res.status(500).json(err);
});
