const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	optimization: {
		nodeEnv: 'production',
		minimize: true,
		minimizer: [new TerserPlugin({
			test: /\.js(\?.*)?$/i,
			exclude: /\/node_modules/,
			sourceMap: false
		})]
	}
	// plugins: [new CompressionPlugin()]
}

