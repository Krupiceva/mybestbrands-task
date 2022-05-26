import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const Product = ({ product }) => {
	//If sub category do not exist, category is main category
	let category
	try {
		category = product.DealClassification.SubTag.Name
	} catch (error) {
		category = product.DealClassification.ProductTag.Name
	}

	let image = product.Details.Media.ThumbnailImagePath
	//let imageXXL = image.split('.jpg')[0] + '_xxl.jpg'

	let price = product.Pricing.Price.Amount / 100
	let priceString = product.Pricing.Price.FormattedString
	let discountedPrice = product.Pricing.DiscountedPrice.Amount / 100
	let discountedPriceString = product.Pricing.DiscountedPrice.FormattedString

	return (
		<Card className='my-3  border-0 '>
			<a href={`/products/${product.DealID}`}>
				<Card.Img className='product-image' src={image} alt='product-thumb' />
			</a>
			<Card.Body>
				<a className='product-brand-name' href={`/products/${product.DealID}`}>
					{product.Brand.Name}
				</a>
				<div className='product-category'>{category}</div>
				{price === discountedPrice ? (
					<div>{priceString}&euro;</div>
				) : (
					<div>
						<span className='new-price'>{discountedPriceString}&euro;</span>
						<span className='old-price'>{priceString}&euro;</span>
					</div>
				)}
				<hr
					style={{
						'border-top': '1px solid #A9A9A9',
					}}
				/>
				<Row>
					<Col xs={6} className='like-col'>
						<span className='like'></span>
					</Col>
					<Col xs={6} className='pink-link'>
						<a href='#zumshop'>Zum shop</a>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default Product
