const fs = require('fs');
const path = require('path');
const generatePage = require('./generatePage')
const readFiles = require('./readFiles')
const getTemplate = require('./getTemplate')
const generateTemplateMap = require('./generateTemplateMap')

// path where all the views are stored
const viewsDir = path.resolve(__dirname, '../src/views')

// get a list of templates that each file wants to use
const templateMap = generateTemplateMap()

// list of HtmlWebpackPlugin pages for building 
const pages = []

// list of avaliable routes (views)
const routes = []
readFiles(viewsDir, ({ title, filepath }) => {
	routes.push({ title, filepath })
});


routes.forEach((route, i) => {
	const template = getTemplate(templateMap, route.title)
	const currentDir = route.filepath.split("/")[0]
	const nextDir = (routes[i + 1] !== undefined) ? routes[i + 1].filepath.split("/")[0] : ''
	const prevDir = (routes[i - 1] !== undefined) ? routes[i - 1].filepath.split("/")[0] : ''
	pages.push(generatePage({
		path: (route.title === 'index') ? '' : route.filepath, //where to write the file to in dist
		template: template, // the base template to use
		title: route.title, // the title of the page
		target: route.filepath, // tells EJS to use this js file to populate its template body 
		previous: (prevDir && prevDir != 'index') ? routes[i - 1] : '',
		next: (nextDir && nextDir != 'index') ? routes[i + 1] : ''
	}))
})
console.log(pages)

module.exports = pages;
