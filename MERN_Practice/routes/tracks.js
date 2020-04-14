const express = require('express');
const TrackController = require('../controllers/tracks')
const router = express.Router();
const fs = require('fs')
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

// var storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, 'uploads')
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, file.fieldname + '-' + Date.now())
// 	}
// })

// var upload = multer({ storage: storage })
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}
})

// should return all tracks
router.get('/tracks', TrackController.getTracks)

// return a track by its ID
router.get('/track/:id', TrackController.getTrackById)

// post a track
router.post('/track', TrackController.createTrack, upload.single('img'))

// router.post('/track', upload.single('img'), function (req, res, next) {
// 	const file = req.file
// 	if (!file) {
// 		const error = new Error('Please upload a file')
// 		error.httpStatusCode = 400
// 		return next(error)
// 	}
// 	res.send(file)
// })

// delete a track by its ID
router.delete('/track/:id', TrackController.deleteTrack)

module.exports = router