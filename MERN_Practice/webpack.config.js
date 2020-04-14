const path = require('path');
const merge = require('webpack-merge')
const paths = require('./webpack/paths')
const modules = require('./webpack/modules')
const common = require('./webpack/common')
const plugins = require('./webpack/plugins')

// import path from 'path'
// import merge from 'webpack-merge'
// import paths from './webpack/paths'
// import modules from './webpack/modules'
// import common from './webpack/common'
// import plugins from './webpack/plugins'

const options = merge(modules, common, plugins, {
	stats: "errors-only"
})

module.exports = options
// export default options;
// export default {};
