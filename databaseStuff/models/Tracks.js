const mongoose = require('mongoose')

const Track = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	desc: {
		type: String,
		require: true
	},
	img: {
		data: Buffer, 
		contentType: String
	}

}, { collection: 'testCollection' })

module.exports = mongoose.model('Track', Track)