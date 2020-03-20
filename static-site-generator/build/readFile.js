const fs = require('fs')
const path = require('path')

// Takes a function called processFiles to pass each file back to its caller 
// returns the filepath and title of a file without their extension
// filepath should be the full filepath. or at least from 'src/views/filename.js'
function readFiles(filepath, processFiles) {
    // split the full path (/home/roland/...) and get the string after views. EG: about, notes/blog
    let relFilePath = filepath.split("/static-site-generator/src/views/")[1]
    processFiles({
        // return the filepath without an extension
        filepath: relFilePath.split('.')[0],
        // return the file of the filepath without an extension
        title: path.parse(filepath).name
    })
}


module.exports = readFiles;