var http = require('http');

// res je NODE Stream obj, tj objekt, kterej vyvolava udalosti
var get = http.get(process.argv[2], function(res) {
    // res.on('data', console.log);
    res.on('data', function(chunk) {	// chunk je ten jejich buffer obj
	console.log(chunk.toString());
    });
});

get.on('error', function(e) {
    console.log('Error during request:' + e.message);
});
