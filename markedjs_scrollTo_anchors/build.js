const marked = require('marked')
const ejs = require('ejs');
const fs = require('fs')

// Override function
const renderer = {
	heading(text, level) {
		const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

		return `
			<h${level} id=${escapedText}>
			${text}
			<a name="${escapedText}" onClick="copyUrlToClipboard(${escapedText})" class="anchor" href="#${escapedText}">#</a>	
			</h${level}>`;
	}
};

marked.use({ renderer })

const file = fs.readFileSync("file.md", "utf-8")

let output = marked(file)

const template = fs.readFileSync("template.ejs", "utf-8")
// let html = ejs.render(template)
let html = ejs.render(template, {content: output});

console.log(html)
fs.writeFileSync("public/index.html", html)