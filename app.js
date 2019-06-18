const express = require("express")
const app = express()
const latexToPng = require("latex_to_png")
const cache = require("./cache")


const cacheDir = __dirname + '/public'

app.use(express.static(cacheDir))


app.get("/formula/:formula/size/:size", (req, res) => {

	const { params: { formula, size } } = req

	const cacheKey = cacheDir + req.path
	
	cache.get(cacheKey).then(data => {
			if (data) {
				console.log("hit cache")
				res.writeHead(200, {'Content-Type': 'image/png' })
				res.end(data, 'binary')

			} else {
				console.log("build image init")
				
				latexToPng.render(formula, size).then(data => {
					console.log("build image done")
					
					res.writeHead(200, {'Content-Type': 'image/png' })
					res.end(data, 'binary')

					cache.put(cacheKey, data)
					
				}).catch(err =>
			
					res.status(500).send(err.message)
				)
			}
	})
})



module.exports = app
