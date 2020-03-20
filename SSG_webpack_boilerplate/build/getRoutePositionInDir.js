const filepathHelper = require('../build/filepathHelper')
const listFilesInDir = require('../build/listFilesInDir')
const getPrevRoute = require('../build/getPrevRoute')

// return the index of a filepath relative to its siblings in a directory in the routeMap
module.exports = (targets, filepath) => {
    // filepath = 'notes/tools'
    // console.log(`${filepath}:`)
    const filesInDir = listFilesInDir(targets, getPrevRoute(targets, filepath))
    // console.log(filesInDir)
    const testFirstPos = filesInDir.findIndex(function (route, i) {
        // console.log(`(${route.filepath} | ${filepath})`)
        return route.filepath === filepath
    });
    return testFirstPos
}