const express = require("express")
const app = express()
const latexToPng = require("latex_to_png")

app.get("/formula/:formula/size/:size", (req, res) => {

	const { params: { formula, size } } = req

	latexToPng.render(formula, size).then(data => {

		res.writeHead(200, {'Content-Type': 'image/png' })
		res.end(data, 'binary')

	}).catch(err =>

		res.status(500).send(err.message)
	)
})

module.exports = app
