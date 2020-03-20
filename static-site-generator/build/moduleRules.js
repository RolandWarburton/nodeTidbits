const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	plugins: [new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[id].css'
	})],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: 'dist',
							filename: "[name].css",
						}
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
};
