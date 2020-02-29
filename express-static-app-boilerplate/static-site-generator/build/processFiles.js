
const fs = require('fs');
const path = require('path');
const generatePage = require('./generatePage')
const readFiles = require('./readFiles')

const pages = []
const routes = []
readFiles(path.resolve(__dirname, '../src/views'), ({ title, filepath }) => routes.push({ title, filepath }));

routes.map(route => {
	console.log(`loading ./${route.filepath} The path will be ${route.filepath && route.filepath + '/'}index.html`)
	pages.push(generatePage({
		path: (route.title === 'index') ? '' : route.filepath, //where to write the file to in dist
		template: './template.ejs', // the base template to use
		title: route.title, // the title of the page
		target: route.filepath // tells EJS to use this js file to populate its template body 
	}))
})

module.exports = pages;
