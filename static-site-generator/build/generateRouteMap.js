const fs = require('fs');
const path = require('path')
const readFiles = require('./readFiles')
const readFile = require('./readFile')

// template targets should be an array that looks something like this
// the title is optional, unless its the index
// [
//     {
//         "title": "notes",
//         "directory": true,
//         "path": "notes",
//         "templatePath": "./templates/template-list-item.ejs"
//     }
// ]


module.exports = () => {
	const targets = JSON.parse(fs.readFileSync('templateTargets.json'));
	const viewsDir = path.resolve(process.cwd(), 'src/views')
	console.log(targets)

	const routeMap = []
	targets.forEach((target) => {
		// used to resolve the path that this template is in
		const templatePath = target.templatePath

		// used to resolve the js view that this template is targeting
		const targetPath = path.resolve(viewsDir, target.path)

		if (target.directory) {
			readFiles(targetPath, ({ filepath, title }) => {
				routeMap.push({
					title: title,
					filepath: filepath,
					templatePath: templatePath
				})
			})
		} else {
			// this template target isnt a directory. it is a file
			const fileURL = targetPath + '/' + target.title + '.js'
			readFile(fileURL, ({ filepath, title }) => {
				routeMap.push({
					title: title,
					filepath: filepath,
					templatePath: templatePath
				})
			})
		}
	})
	// console.log("Done generating template map...")
	// console.log(routeMap)
	fs.writeFileSync(process.cwd() + '/temp/routeMap.json', JSON.stringify(routeMap))
	return routeMap
}