
const fs = require('fs');
const path = require('path');
const generatePage = require('./generatePage')
const readFiles = require('./readFiles')

// get a list of templates that each file wants to use
const templates = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/templateMap.json')));
const pages = []
const routes = []
readFiles(path.resolve(__dirname, '../src/views'), ({ title, filepath }) => routes.push({ title, filepath }));

// find the key (routes title) in the list of templates (src/templateMap.json)
// if the key doesnt exist return the default template
const getTemplate = (templates, key) => {
	let result = 'template.ejs'
	templates.map((template) => {
		if (template.title === key) {
			result = template.path
		}
	})
	// return the result
	return result
}

routes.forEach((route, i) => {
	const template = getTemplate(templates, route.title)
	const currentDir = route.filepath.split("/")[0]
	const nextDir = (routes[i + 1] !== undefined) ? routes[i + 1].filepath.split("/")[0] : ''
	const prevDir = (routes[i - 1] !== undefined) ? routes[i - 1].filepath.split("/")[0] : ''
	// console.log(`loading ./${route.filepath} The path will be ${route.filepath && route.filepath + '/'}index.html`)
	pages.push(generatePage({
		path: (route.title === 'index') ? '' : route.filepath, //where to write the file to in dist
		template: template, // the base template to use
		title: route.title, // the title of the page
		target: route.filepath, // tells EJS to use this js file to populate its template body 
		previous: (prevDir && prevDir != 'index') ? routes[i - 1] : '',
		next: (nextDir && nextDir != 'index') ? routes[i + 1] : ''
	}))
	// console.log(`file: ${route.title}. next: ${nextDir}. prev: ${prevDir}`)
	// console.log(`${route.title} - ${route.filepath}`)
})

module.exports = pages;
