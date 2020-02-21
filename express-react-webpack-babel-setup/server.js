// import React from 'react';
// import Index from './src/index';

// import * as path from 'path';
// import express from 'express';

// const path = require('path');
// const express = require("express");

import express from 'express'
import path from 'path'
import React from 'react'
import compression from "compression";
import ssr from "./src/routes/ssr";
// import ReactDOMServer from 'react-dom/server'
// import Index from './src/index'

const app = express();
app.use(compression());
app.use(express.static("public"));
app.use("/", ssr);

app.listen(8080, function listenHandler() {
	console.info("Running");
});

// app.use(express.static('public'));


// app.get('/api/getList', (req, res) => {
// 	var list = ["item11", "item2", "item3"];
// 	res.json(list);
// 	console.log('Sent list of items');
// });

// const valRoland = function (req, res, next) {
// 	const message = "ALLOWED: Hi roland"
// 	if (req.params.id === "roland") {
// 		console.log(message)
// 	} else {
// 		console.log("denied")
// 	}
// 	next()
// }

// app.use('/user/:id', valRoland)

// app.use(function (req, res, next) {
// 	res.status(404).send("Sorry can't find that!")
// })


// app.listen(8080, () => console.log("Example app listening on port 8080!"));

