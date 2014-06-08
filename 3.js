var fs = require('fs');
var file = process.argv[2];

var fileContentSplit = fs.readFileSync(file).toString().split('\n');

console.log(fileContentSplit.length - 1);
