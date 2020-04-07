var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var paths = require('./paths');

module.exports = {
	plugins: [new HtmlWebpackPlugin({
		template: paths.templatePath
	})]
}