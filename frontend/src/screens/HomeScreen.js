import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../deals'

const HomeScreen = () => {
	return (
		<>
			<h1>Damen Jeans</h1>
			<Row>
				<Col xs={2}>FILTERI</Col>
				<Col xs={10}>
					<Row>
						{products.map((product) => (
							<Col xs={6} sm={6} md={4} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default HomeScreen
