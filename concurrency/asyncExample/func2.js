const path = require('path')
const fs = require('fs')

// you could read a file like this
const readFile = function (dir, callback) {
return fs.readFile('data.txt',(err, result) => {
    callback(result)
})
}

// You can traverse a directory and sub directories like this
const filewalker = function (dir, callback) {

    fs.readdir(dir, function (err, result) {

        result.forEach(function (file, i) {
            file = path.resolve(dir, file);

            // get the file status
            fs.stat(file, function (err, stat) {
                // recursive call filewalker if its a directory
                if (stat.isDirectory()) {
                    // its a directory
                    callback(file)
                    filewalker(file, callback)
                } else {
                    // its a file
                    // await loadMarkdown(file)
                    callback(file);
                }
            })
        });
    });
}

module.exports = filewalker;