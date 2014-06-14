var webshot = require('webshot');

var takeWebshot = function(inUrl, inFile) {
	var options = {
		screenSize: {
			width: 1024,
			height: 768
		},
		shotSize: {
			width: 1024,
			height: 768
		},
		renderDelay: 5000,
		timeout: 60000
	};

	webshot(inUrl, inFile, options, function(inError) {
		console.log("Screenshot saved: " + inFile);
	});
};

if (process.argv.length > 3)
   takeWebshot(process.argv[3], "./screenshots/" + process.argv[2] + ".png");
else
	console.log("Usage: node index.js [IMAGE NAME] [SITE URL]");

