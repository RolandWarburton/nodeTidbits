const fs = require('fs')
const path = require('path')

// Takes a function called processFiles to pass each file back to its caller 
function readFiles(filename, processFiles) {
    // fs.readFileSync(filename)
    const filepath = path.dirname(filename);
    const title = path.parse(filename).name;
    const ext = path.parse(filename).ext;
    const stat = fs.statSync(filepath);
    const isFile = stat.isFile();
    const isDir = stat.isDirectory();

    // get the relative filename from /src/views/....
    const relFilepath = /\/src\/views\/(.+)/.exec(filename)[1]
    processFiles({ relFilepath, title })
}


module.exports = readFiles;