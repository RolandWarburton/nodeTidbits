const fs = require('fs')
const path = require('path')
const func2 = require('./func2')

const func1 = async function (dir, callback) {
    return await func2(dir, callback)
}

module.exports = func1;