const merge = require('webpack-merge');
const pages = require('./build/processFiles');
const devserver = require('./build/devserver');
const moduleRules = require('./build/moduleRules');
const optimization = require('./build/optimization');


const config = merge(devserver, optimization, moduleRules, ...pages, {
    devtool: '',
    stats: 'errors-only',
    output: {
        crossOriginLoading: 'anonymous'
    },
    entry: {
        app: './src/index.js'
      },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }
});

module.exports = config;