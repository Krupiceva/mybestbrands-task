import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import products from './data/deals.js'

dotenv.config()

const app = express()

app.get('/api/products', (req, res) => {
	const pageSize = 8
	const page = Number(req.query.pageNumber) || 1
	const keyword = req.query.keyword
	let renderedProducts

	if (keyword) {
		renderedProducts = products.filter((p) =>
			p.Brand.Name.toLowerCase().includes(keyword.toLowerCase())
		)
	} else {
		renderedProducts = products
	}

	const count = renderedProducts.length
	const start = pageSize * (page - 1)
	renderedProducts = renderedProducts.slice(start, start + pageSize)
	res.json({
		products: renderedProducts,
		page,
		pages: Math.ceil(count / pageSize),
	})
})

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p.DealID.toString() === req.params.id)
	res.json(product)
})

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	})
} else {
	app.get('/', (req, res) => {
		res.send('API is running...')
	})
}

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
