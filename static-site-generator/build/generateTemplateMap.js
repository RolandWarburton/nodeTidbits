const fs = require('fs');
const path = require('path')
const readFiles = require('./readFiles')
const readFile = require('./readFile')

// Path to the template targets
const templateTargetsDir = path.resolve(__dirname, '../templateTargets.json')

// Path where all the views are stored
const viewsDir = path.resolve(__dirname, '../src/views')

module.exports = () => {
    const targets = JSON.parse(fs.readFileSync(templateTargetsDir));
    const templateMap = []
    targets.forEach((target) => {
        // used to resolve the path that this template is in
        const templatePath = target.templatePath

        // used to resolve the js view that this template is targeting
        const targetPath = target.path

        if (target.directory) {
            readFiles(path.resolve(viewsDir, targetPath), ({ title }) => {
                console.log(`FOUND FILE IN ${targetPath} DIRECTORY ${title}`)
                templateMap.push({ title, templatePath })
            })
        } else {
            // this template target isnt a directory. it is a file
            const fileURL = path.resolve(viewsDir, targetPath) + '/' + target.title + '.js'
            readFile(fileURL, ({ title }) => {
                console.log(`FOUND IN ${targetPath} FILE ${title}`)
                templateMap.push({ title, templatePath })
            })
        }
    })
    console.log("done")
    return templateMap
}

// {
//     "title": "about",
//     "directory": false,
//     "path": "",
//     "templatePath": "./template-list-item.ejs"
// },