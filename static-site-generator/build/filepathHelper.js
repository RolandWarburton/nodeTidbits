
const lengthOfRoute = function (filepath) {
    // check if the given filepath is an array
    const isArray = Array.isArray(filepath)

    // if its an array return its length
    if (isArray) return filepath.length
    // if its not an array convert it to one and return its length
    else return filepathToArray(filepath).length
}

// takes a json object of routeMap 'targets' and a filepath array and returns true if it exists
// return true if the filepath exists in routeMap.json
const checkIfPathExists = function (targets, filepath) {
    // result needs to be declared here and set later 
    // because if 'return false' is at the bottom the function it will always return false
    filepath = sanitizeHTMLfilepath(filepath)
    let result = false
    targets.forEach((route) => {
        const routeLength = lengthOfRoute(route.filepath)
        const filepathLength = lengthOfRoute(filepath)

        // ensure that the route and path are both strings for the following part
        const routeString = filepathToString(route.filepath)
        const filepathString = filepathToString(filepath)
        if (routeLength <= filepathLength) {
            if (routeString === filepathString) {
                result = true
            }
        }
    })
    return result
}

// // returns true if the filepath is in a directory
// // return true if the filepath exists in routeMap.json
// const checkIfRouteExistsInDir = function (targets, filepath) {
//     // result needs to be declared here and set later 
//     // because if 'return false' is at the bottom the function it will always return false
//     filepath = sanitizeHTMLfilepath(filepath)
//     let result = false
//     if (checkIfPathExists(targets, filepath)) {
//         targets.forEach((route) => {
//             const filepathArray = filepathToArray(filepath)
//             if (filepathArray[filepathArray.length - 1]) {

//             }
//         })
//     } else {
//         result = false
//     }
//     return result
// }

// return the last element of a filepath
const last = function (filepath) {
    if (!Array.isArray(filepath)) filepath = filepathToArray(filepath)
    return filepath[filepath.length - 1];
}

// takes a filepath and returns it as a string
// EG: ["file", "to", "path"] OUTPUTS: "file/to/path"
const filepathToString = function (filepath) {
    // check if the given filepath is an array
    const isArray = Array.isArray(filepath)
    let result = ''

    // the filepath is an array. return it as a string
    if (isArray && filepath.length > 0) {
        result = String(filepath.reduce((acc, link) => acc + "/" + link))
    } else {
        // the filepath is already a string so just return it
        result = String(filepath)
    }
    return result
}

// takes a filepath and returns it as a string
// EG: "file/to/path" OUTPUTS: ["file", "to", "path"]
const filepathToArray = function (filepath) {
    // check if the given filepath is an array

    filepath = sanitizeHTMLfilepath(filepath)
    const isArray = Array.isArray(filepath)
    let result = []

    // if the filepath is a string. return it as an array
    if (!isArray) {
        result = filepath.split("/")
    } else {
        result = filepath
    }

    // return 0 if the filepath splits into: ["",] 
    // (IE. is on the root path and had '' or '/' passed to it)
    if (result.length == 1 && (result[0] == '' || result[0] == '/')) {
        result = []
    }

    return result
}

// takes a filepath and strips any html extension from it
// EG: INPUT: "file/path/index.html" OUTPUT: "file/path"
const sanitizeHTMLfilepath = function (filepath) {
    filepath = filepathToString(filepath)
    let result = filepath

    const stripDotHtml = (filepath) => {
        let temp = filepath.split('/')
        temp.splice(-1, 1)
        return filepathToString(temp)
    }


    if (filepath.includes('.html')) {
        filepath = stripDotHtml(filepath)
    }

    if (filepath.substring(filepath.length - 1) == '/') {
        filepath = filepath.substring(0, filepath.length - 1);
    }

    if (filepath.substring(0, 1) == '/') {
        filepath = filepath.substring(1, filepath.length);
    }

    return filepathToString(filepath)
}

module.exports = {
    lengthOfRoute,
    filepathToArray,
    filepathToString,
    checkIfPathExists,
    sanitizeHTMLfilepath
}