const merge = require('webpack-merge');
const pages = require('./build/processFiles');
const devserver = require('./build/devserver');
const moduleRules = require('./build/moduleRules');


const config = merge(...pages, devserver, moduleRules, {
    devtool: "eval-source-map",
    stats: 'errors-only'
});

module.exports = config;