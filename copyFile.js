var fs = require('fs')

var oldPath = './src/jeeliz/jeefacetransferNNC.json'
var newPath = './dist/jeefacetransferNNC.json'


// destination.txt will be created or overwritten by default.
fs.copyFile(oldPath, newPath, (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});