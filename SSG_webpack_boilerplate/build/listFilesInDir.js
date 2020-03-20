const fp = require('./filepathHelper')
const fs = require('fs')
const getPrevRoute = require('./getPrevRoute')
// const getRoutePositionInDir = require('./getRoutePositionInDir')

// takes returns all page titles and filepaths in the given directory
module.exports = (targetMap, filepath) => {
    filepath = fp.sanitizeHTMLfilepath(filepath)
    // const initData = JSON.parse(fs.readFileSync('./temp/routeMap.json'));
    const result = []
    targetMap.forEach((route) => {
        // if (fp.lengthOfRoute(route.filepath) == 0) {

        // }
        if (fp.lengthOfRoute(route.filepath) == fp.lengthOfRoute(filepath) + 1) {
            if (getPrevRoute(targetMap, route.filepath) == filepath ) {
                result.push(route)
            }
        }
    })
    return result
}