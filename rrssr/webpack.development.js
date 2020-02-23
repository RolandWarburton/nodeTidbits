const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

const serverDevelopment = {
    target: 'node',
    mode: "development",
    devtool: 'eval-source-map',
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
    externals: [webpackNodeExternals()]
}

const clientDevelopment = {
    target: 'node',
    mode: "development",
    devtool: 'eval-source-map',
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
    }
}



module.exports = [serverDevelopment, clientDevelopment]