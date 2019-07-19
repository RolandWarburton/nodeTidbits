const express = require('express');
const router = express.Router();
const data = require('../../Data')

// all the routes are just '/' because their route is set in index.js

// get all data
router.get('/', (req, res) => {
	res.json(data);
});

// get single bit of data
// send back the whole object as 'result'
router.get('/:_uuid', (req, res) => {

	// for each data => does it that one equal the one we are looking for
	result = data.filter(data => data._uuid === req.params._uuid)
	// if theres any data show it otherwise change the status code to 400 bad request
	if (result.length > 0) {
		res.json(result);
	} else {
		res.status(400).json({response: `${req.params._uuid} not found`});	
	}
	
});

module.exports = router