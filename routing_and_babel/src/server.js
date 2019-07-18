// server.js
// var http = require('http');
import http from 'http';
import {handleRequest} from './app.js';
// var app = require('./app');
http.createServer(handleRequest).listen(8000);