const express = require('express');
const TrackController = require('../controllers/tracks')
const router = express.Router();
const fs = require('fs')

// should return all tracks
router.get('/tracks', TrackController.getTracks)

// return a track by its ID
router.get('/track/:id', TrackController.getTrackById)

// post a track
router.post('/track', TrackController.createTrack)

// delete a track by its ID
router.delete('/track/:id', TrackController.deleteTrack)

module.exports = router