import express from 'express'
import dotenv from 'dotenv'
import products from './data/deals.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.get('/api/products', (req, res) => {
	const keyword = req.query.keyword

	if (keyword) {
		res.json(
			products.filter((p) =>
				p.Brand.Name.toLowerCase().includes(keyword.toLowerCase())
			)
		)
	} else {
		res.json(products)
	}
})

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p.DealID.toString() === req.params.id)
	res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
