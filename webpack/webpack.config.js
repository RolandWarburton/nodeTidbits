const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: [/.js$/],
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							
						]
					}
				}
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack 4 Starter',
			template: './src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		})
	],

	resolve: {
		extensions: ['.js', '.ts']
	}
};