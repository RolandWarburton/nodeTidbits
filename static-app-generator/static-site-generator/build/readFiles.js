const fs = require('fs');
const path = require('path');

// Takes a function called processFiles to pass each file back to its caller 
function readFiles(dir, processFiles) {
	fs.readdirSync(dir)
		.forEach(filename => {
			const filepath = path.resolve(dir, filename)
			const title = path.parse(filename).name;
			const ext = path.parse(filename).ext;
			const stat = fs.statSync(filepath);
			const isFile = stat.isFile();
			const isDir = stat.isDirectory();

			if (isFile) {
				// get the relative path from /src/views/....
				const filepath = /\/src\/views\/(.+)/.exec(dir + '/' + path.parse(filename).name)[1]
				processFiles({ filepath, title, ext, stat })
				console.log(`found: ${filepath}`)
			}
			// keep traversing new directories to map out the entire site
			if (title != 'partials' && isDir) {
				readFiles(filepath, processFiles)
			}
		});
}


module.exports = readFiles;