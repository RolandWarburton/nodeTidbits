const path = require('path')
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const server = {
    target: 'node',
    mode: "production",
    devtool: 'none',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 })
    ],
    externals: [webpackNodeExternals()]
}

const client = {
    target: 'node',
    mode: "production",
    devtool: 'none',
    entry: './src/client.js',
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: { compact: true },
                exclude: '/node_modules/',
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 })
    ]
}

module.exports = [server, client]