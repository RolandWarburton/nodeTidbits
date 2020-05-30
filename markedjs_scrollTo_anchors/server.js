const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config()

app.use(express.static(path.resolve(process.env.ROOT, 'public')));

app.listen(process.env.PORT || 8080);

console.log('server started on port: ', process.env.PORT || 8080);