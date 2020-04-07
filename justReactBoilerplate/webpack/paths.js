const path = require('path');
const root = path.resolve(__dirname, '../')

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