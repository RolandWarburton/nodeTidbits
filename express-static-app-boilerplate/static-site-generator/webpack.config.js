const merge = require('webpack-merge');
const common = require('./build/common');
const pages = require('./build/processRoutes');
const devserver = require('./build/devserver');

const config = merge(common, ...pages, devserver);

module.exports = config;