// "use strict";
import url from 'url';
import fs from 'fs'

function renderHTML(path, response) {
	fs.readFile(path, null, function (error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File not found!');
		} else {
			response.write(data);
		}
		response.end();
	});
}


function handleRequest(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' });

	var path = url.parse(request.url).pathname;
	switch (path) {
		case '/':
			renderHTML('./index.html', response);
			break;
		case '/page2':
			renderHTML('./page2.html', response);
			break;
		default:
			renderHTML('./404.html', response);
	}
};


export { handleRequest };