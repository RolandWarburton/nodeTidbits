const Track = require('../models/Tracks')
require('dotenv').config()

// const img = fs.readFileSync(req.file.img);
// const encode_image = img.toString('base64');
// const finalImg = {
// 	contentType: req.file.mimetype,
// 	image: new Buffer(encode_image, 'base64')
// };
// db.collection('quotes').insertOne(finalImg, (err, result) => {
// 	console.log(result)

// 	if (err) return console.log(err)

// 	console.log('saved to database')
// 	res.redirect('/')


// })

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

createTrack = async (req, res) => {
	const body = req.body
	console.log("parsing")
	console.log(body)

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'nothing in body'
		})
	}

	const track = new Track(body)

	if (!track) {
		return res.status(400).json({ success: false, error: err })
	}

	track
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: track.id,
				desc: track.desc,
				message: "success!"
			})
		})
		.catch((err) => {
			return res.status(400).json({
				success: false,
				err
			})
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
			return res.status(200).json({ success: true, data: track })
		})
		.catch((err) => console.log(err))
}

module.exports = {
	createTrack,
	deleteTrack,
	getTracks,
	getTrackById
}