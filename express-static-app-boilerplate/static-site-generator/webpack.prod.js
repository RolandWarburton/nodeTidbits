const merge = require('webpack-merge');
const SriPlugin = require('webpack-subresource-integrity')
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
    plugins: [
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
            enabled: process.env.NODE_ENV === 'production',
        })
    ]
});

module.exports = config;