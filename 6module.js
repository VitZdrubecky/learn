var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
    var results = [];
    fs.readdir(dir, function(err, list) {
	if (err) return callback(err);  // early return
	for (var i = 0; i < list.length; i++) 
	    if ( path.extname(list[i]) === ('.' + ext) )
		results.push(list[i]);
	return callback(null, results);
    });
}

