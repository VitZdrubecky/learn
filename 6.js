var mymodule = require('./6module');
var dir = process.argv[2];
var ext = process.argv[3];

var results = [];

mymodule(dir, ext, function(err, data) {
    if (err) {
	return console.error("There has been an error inside my module:", err);
    }
    for (var i = 0; i < data.length; i++)
	console.log(data[i]);
//    data.forEach(function(file) {
//	console.log(file);
//    })
});

