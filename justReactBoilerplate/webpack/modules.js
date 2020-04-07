module.exports = {
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: [/node_modules/],
				use: [{ loader: "babel-loader" }]
			},
			{
				test: /.*\.(gif|png|jp(e*)g|svg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							name: "images/[name]_[hash:7].[ext]"
						}
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
		]
	}
}