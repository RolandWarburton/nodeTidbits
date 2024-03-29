const fs = require('fs')
const path = require('path')
const readFile = require('./readFile')

// Takes a function called processFiles to pass each file back to its caller 
function readFiles(dir, processFiles, traverse = true) {
	fs.readdirSync(dir)
		.forEach(filename => {
			const filepath = path.resolve(dir, filename)
			const title = path.parse(filename).name;
			const ext = path.parse(filename).ext;
			const stat = fs.statSync(filepath);
			const isFile = stat.isFile();
			const isDir = stat.isDirectory();

			if (isFile) {
				readFile(filepath, processFiles)
			}

			// keep traversing new directories to map out the entire site
			if (traverse && title != 'partials' && isDir) {
				readFiles(filepath, processFiles)
			}
		});
}


module.exports = readFiles;