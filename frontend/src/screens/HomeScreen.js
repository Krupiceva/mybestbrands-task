import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	return (
		<>
			<h1>Damen Jeans</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col xs={2}>FILTERI</Col>
					<Col xs={10}>
						<Row>
							{products.map((product) => (
								<Col key={product.DealID} xs={6} sm={6} md={4} lg={4} xl={3}>
									<Product product={product} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			)}
		</>
	)
}

export default HomeScreen
