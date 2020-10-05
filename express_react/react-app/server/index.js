const path = require("path");
const express = require("express");
const app = express(); // create express app

// serve the react app
app.use(express.static(path.join(__dirname, "..", "build")));
// serve some static assets in server/public for example server/public/users.json
app.use(express.static("public"));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
	console.log("server started on port 5000");
});
