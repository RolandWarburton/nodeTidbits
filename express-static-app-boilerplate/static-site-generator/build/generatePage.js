const HtmlWebpackPlugin = require('html-webpack-plugin');

// target is derrived from template.ejs
// it should be the name of the name of the file (not the path name)
const generatePage = ({ path, template, title, target } = {}) => ({
	plugins: [
		new HtmlWebpackPlugin({
			filename: `${path && path + '/'}index.html`,
			template: template,
			title: title,
			target: target
		})
	]
});

module.exports = generatePage;