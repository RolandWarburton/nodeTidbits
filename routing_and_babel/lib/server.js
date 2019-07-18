"use strict";

var _http = _interopRequireDefault(require("http"));

var _app = require("./app.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
// var http = require('http');
// var app = require('./app');
_http["default"].createServer(_app.handleRequest).listen(8000);