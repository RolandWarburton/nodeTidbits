const HtmlWebpackPlugin = require('html-webpack-plugin');

// target is derrived from template.ejs
// it should be the path name of the file 
const generatePage = ({ path, template, title, target, previous, next, favicon }) => ({
	plugins: [
		new HtmlWebpackPlugin({
			filename: `${path && path + '/'}index.html`, // output file to here
			template: template,
			title: title,
			target: target, //populate this location with the js file in src/views/....
			favicon: favicon, 
			showErrors: false,
			minify: true,
			previous: previous,
			next: next
		})
	]
});

module.exports = generatePage;