const path = require('path');
const paths = require('./paths');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: paths.entryPath,
	output: {
		filename: 'main.js',
		path: paths.outputPath,
	}
}