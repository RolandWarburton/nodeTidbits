const merge = require('webpack-merge');
const webpack = require('webpack')
const pages = require('./build/processFiles');
const devserver = require('./build/devserver');
const moduleRules = require('./build/moduleRules');
const optimization = require('./build/optimization');


const config = merge(devserver, optimization, moduleRules, ...pages, {
    devtool: '',
    stats: 'errors-only',
});

module.exports = config;