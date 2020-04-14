const mongoose = require('mongoose');
require('dotenv/config');

// connect to the database
mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.catch(err => {
		console.log(err)
	});

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

module.exports = connection