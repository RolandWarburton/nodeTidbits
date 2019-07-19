const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

// look at the env variables for port. OR run on 5000
const PORT = process.env.PORT || 5000;

//init a variable with express. now app has all of the express methods
const app = express();

// members API routes | see /routes/api/getdata.js
app.use('/api/data', require('./routes/api/getData'))

// init middleware
app.use(logger)




// start the server
app.listen(PORT, () => console.log(`server running on port ${PORT}`));























// var dontRunMe = function() {
// 	// routing | setting up a 'static' site the HARD way
// 	app.get('/', (req, res) => {
// 		// __dirname = current dir | then go into public folder | then load index.html
// 		res.sendFile(path.join(__dirname, 'public', 'index.html'));
// 	})
// }

// app.use(express.static(path.join(__dirname, 'public')));
// var dontRunMe = function() {
// 	// routing | setting up a static site the EASY way
// 	app.use(express.static(path.join(__dirname, 'public')));
// }
