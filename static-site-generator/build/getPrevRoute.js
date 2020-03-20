const fp = require('../build/filepathHelper')

module.exports = (targets, filepath) => {
    // split the filepath into an array
    // let currentPathArray = filepath.split('/')

    // remove index.html from the filepath
    filepath = fp.sanitizeHTMLfilepath(filepath)



    // convert it into an array
    currentPathArray = fp.filepathToArray(filepath)

    // store the length of the filepath
    fpLength = fp.lengthOfRoute(filepath)

    // if the length of the filepath is 0 or 1 then going back to the previous path will put you on the root
    // all filepaths are treated as directories
    // EG: 'notes' OUTPUT: ''
    // EG: '' OUTPUT: ''
    // EG: 'notes/mynotes' OUTPUT: 'notes'
    if (fpLength <= 1) {
        return ''
    } else {
        do {
            // keep removing the last element of the filepath until a matching filepath is found
            currentPathArray.splice(fp.lengthOfRoute(currentPathArray) - 1)
        } while (!fp.checkIfPathExists(targets, currentPathArray))
        return fp.filepathToString(currentPathArray)
    }
}