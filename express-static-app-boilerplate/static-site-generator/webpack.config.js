const merge = require('webpack-merge');
const common = require('./build/common');
// const pages = require('./build/processRoutes');
const pages = require('./build/processFiles');
const devserver = require('./build/devserver');
const moduleRules = require('./build/moduleRules');


const config = merge(common, ...pages, devserver, moduleRules);

module.exports = config;