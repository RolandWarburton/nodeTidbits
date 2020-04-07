const path = require('path');
const merge = require('webpack-merge')
const paths = require('./webpack/paths')
const modules = require('./webpack/modules')
const common = require('./webpack/common')
const plugins = require('./webpack/plugins')

const options = merge(modules, common, plugins)

module.exports = options