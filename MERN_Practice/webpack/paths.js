const path = require('path');
require('dotenv/config');
const root = process.env.ROOT
console.log(root)

module.exports = {
  root: root,
  entryPath: path.resolve(root, 'src/index.js'),
  outputPath: path.resolve(root, 'dist'),
  templatePath: path.resolve(root, 'templates/template.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};