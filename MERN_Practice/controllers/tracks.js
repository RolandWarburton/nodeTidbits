const Track = require('../models/Tracks');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const { v5: uuidv5 } = require('uuid');
const FormData = require('form-data');
require('dotenv').config();

// check this one for a progress bar! WOULD BE COOL THO
// https://stackoverflow.com/questions/8359902/how-to-rename-files-parsed-by-formidable
createTrack = (req, res) => {
	console.log("parsing")

	const form = formidable(
		{
			multiples: false,
			uploadDir: process.env.ROOT + "/uploads",
			keepExtensions: true
		}
	);

	form.parse(req, (err, fields, files) => {
		if (err) {
			next(err);
			return res.status(400).json({
				success: false,
				error: 'Failed to parse the form data'
			})
		}
		
		// add the uuid to the fields to pass into the Track schema
		const uuid = uuidv5(files.image.name, uuidv5.DNS)
		fields.imgName = uuid + ".png"

		// create a new Track object from the mongoose schema
		const track = new Track(fields)

		if (!track) {
			return res.status(400).json({ success: false, error: err })
		}

		track
			.save()
			.then(() => {
				return res.status(201).json({
					success: true,
					id: track._id,
					title: track.title,
					desc: track.desc,
					imgName: track.uuid,
					message: "success!"
				})
			})
			.catch((err) => {
				return res.status(400).json({
					success: false,
					err
				})
			})

	});

	// Rename the file when saving it
	form.on('fileBegin', function (name, file) {
		file.path = form.uploadDir + "/" + uuidv5(file.name, uuidv5.DNS);
	})


}

deleteTrack = async (req, res) => {
	await Track
		.findOneAndDelete({ title: req.params.id }, (err, track) => {
			if (err) {
				return res.status(400).json({ success: false, error: err })
			}

			if (!track) {
				return res
					.status(404)
					.json({ success: false, error: `track not found` })
			}
			return res.status(200).json({ success: true, data: track })
		})
		.catch(err => console.log(err))
}

getTracks = async (req, res) => {
	await Track
		.find({}, (err, tracks) => {
			if (err) {
				return res.status(400).json({ success: false, error: err })
			}
			if (!tracks.length) {
				return res
					.status(404)
					.json({ success: false, error: `Tracks not found` })
			}
			return res.status(200).json({ success: true, data: tracks })
		})
		.catch(err => console.log(err))
}

getTrackById = async (req, res) => {
	await Track
		.findOne({ title: req.params.id }, (err, track) => {
			if (err) {
				return res.status(400).json({ success: false, error: err })
			}

			if (!track) {
				return res
					.status(404)
					.json({ success: false, error: `Track not found` })
			}

			console.log(track)
			// const media = await fs.readFile(process.env.ROOT + "/uploads/" + track.imgName)
			res.status(200).sendFile(path.resolve(process.env.ROOT, "uploads", track.imgName + ".png"))
			// return res.status(200).json({ success: true, data: track })
		})
		.catch((err) => console.log(err))
}

getTrackMedia = async (req, res) => {
	await Track
		.findOne({ title: req.params.id }, (err, track) => {
			if (err) {
				return res.status(400).json({ success: false, error: err })
			}

			if (!track) {
				return res
					.status(404)
					.json({ success: false, error: `Track not found` })
			}

			console.log(track)
			return res.status(200).sendFile(path.resolve(process.env.ROOT, "uploads", track.imgName))
			// return res.status(200).json({ success: true, data: track })
		})
		.catch((err) => console.log(err))
}

module.exports = {
	createTrack,
	deleteTrack,
	getTracks,
	getTrackById
}