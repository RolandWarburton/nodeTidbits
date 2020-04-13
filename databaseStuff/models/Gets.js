const mongoose = require('mongoose')

const Track = mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	}
})

module.exports = mongoose.model('Track', Track)