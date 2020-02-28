
const fs = require('fs');
const path = require('path');
const generatePage = require('./generatePage')

const pages = []
const routes = JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json')))

routes.map(route => {
	pages.push(generatePage({
		path: (route.title === 'index') ? '' : route.path, // if the path is index '/'
		template: route.template, // the base template to use
		title: route.title, // the title of the page
		target: route.title // which html body to use on the template provided
	}))
	console.log(`loaded: ${route.title}`)
})

module.exports = pages;
