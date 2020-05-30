const marked = require('marked')
const fs = require('fs')

// Override function
const renderer = {
	heading(text, level) {
		const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

		return `
			<h${level} style="background: #efefef; ">
			${text}
			<a name="${escapedText}" class="anchor" href="#${escapedText}">#</a>	
			</h${level}>`;
	}
};

marked.use({ renderer })

const file = fs.readFileSync("file.md", "utf-8")

// define some styles
let output = `
<style>
span {
	width: 100%;
}
.span-right {
	text-align: right;
}
</style>
<br/>
`

// add the markdown content
output += marked(file)


// add the scroll to functionality
output += `
<br/>
<script type="text/javascript" language="javascript">
const copyUrlToClipboard = (id) => {
	const e = (id) ? document.getElementById(id) : undefined
	if (e) navigator.clipboard.writeText(document.location.href).then(() => {})
}
<script>
`

console.log(output)
fs.writeFileSync("public/index.html", output)