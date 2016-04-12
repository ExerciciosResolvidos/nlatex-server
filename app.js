var express = require("express")
var app = express()
var nlatexToPng = require("latex_to_png")

app.get("/formula/:formula/size/:size", (req, res) => {
	console.log(req.params.formula)
	console.log(req.params.size)
	var file = nlatexToPng.render(req.params.formula,req.params.size)

         res.writeHead(200, {'Content-Type': 'image/png' });
         res.end(file, 'binary');

})

module.exports = app
