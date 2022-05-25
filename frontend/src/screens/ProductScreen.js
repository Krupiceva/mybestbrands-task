import React from 'react'
import { Row, Col, Image, Dropdown } from 'react-bootstrap'
import ImageModal from '../components/ImageModal'
import products from '../deals'

const ProductScreen = ({ match }) => {
	const product = products.find((p) => p.DealID == match.params.id)
	const thumbnailImage = product.Details.Media.ThumbnailImagePath
	const imageXXL = thumbnailImage.split('.jpg')[0] + '_xxl.jpg'

	//If sub category do not exist, category is main category
	let category
	try {
		category = product.DealClassification.SubTag.Name
	} catch (error) {
		category = product.DealClassification.ProductTag.Name
	}

	let price = product.Pricing.Price.Amount / 100
	let priceString = product.Pricing.Price.FormattedString
	let discountedPrice = product.Pricing.DiscountedPrice.Amount / 100
	let discountedPriceString = product.Pricing.DiscountedPrice.FormattedString

	let sizes = product.Details.AvailableSizes.split('|')

	const retailer = product.Retailer.Name

	const description = product.Details.Description || '-'
	const material = product.Details.Material

	const shippings = product.Retailer.Shippings

	const payments = product.Retailer.PaymentTypes

	const [modalShow, setModalShow] = React.useState(false)

	return (
		<>
			<Row className='py-5'>
				<Col md={6}>
					<Image
						width='80%'
						className='detail-image'
						fluid
						src={imageXXL}
						alt='item-image'></Image>
				</Col>
				<Col md={6}>
					<Row className='brand-name'>
						<Col>{product.Brand.Name}</Col>
					</Row>
					<Row className='product-category'>
						<Col>{category}</Col>
					</Row>
					<Row className='mb-4'>
						{price === discountedPrice ? (
							<div>{priceString} &euro;</div>
						) : (
							<div>
								<span className='detail-new-price'>
									{discountedPriceString} &euro;
								</span>
								<span className='price-separator'>|</span>
								<span className='detail-old-price'>{priceString} &euro;</span>
							</div>
						)}
					</Row>
					<Row className='mb-4'>
						<Col>
							<a
								className='zum-shop-btn'
								href={product.Details.Links.DealTargetUrl}>
								Zum shop <strong>{retailer}</strong>
							</a>
						</Col>
					</Row>
					<Row className='dropdown-row'>
						<Dropdown>
							<Dropdown.Toggle>Verfügbare Größen</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.ItemText className='pb-3'>
									{sizes.map((size, index) =>
										index === 0 ? (
											<span className='pe-3'>{size}</span>
										) : (
											<span className='px-3'>{size}</span>
										)
									)}
									<br />
									<a
										href='#sizestable'
										className='sizes-button'
										onClick={() => setModalShow(true)}>
										Größentabelle
									</a>
									<ImageModal
										sizesTable='https://www.mybestbrands.de/eaglestatic/images/groessentabelle-jeans-da.jpg'
										show={modalShow}
										onHide={() => setModalShow(false)}
									/>
								</Dropdown.ItemText>
							</Dropdown.Menu>
						</Dropdown>
					</Row>
					<Row className='dropdown-row'>
						<Dropdown>
							<Dropdown.Toggle>Produktdetails</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.ItemText className='pb-3'>
									<div className='pb-3'>{description}</div>
									{material && <div>Material: {material}</div>}
								</Dropdown.ItemText>
							</Dropdown.Menu>
						</Dropdown>
					</Row>
					<Row className='dropdown-row'>
						<Dropdown>
							<Dropdown.Toggle>Versand</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.ItemText className='pb-3'>
									{shippings.map((shipping) => (
										<div>
											<div className='pb-2' style={{ 'font-weight': 'bold' }}>
												{shipping.Country}
											</div>{' '}
											<div className='pb-2'>
												Versandkosten: {shipping.ShippingAndHandling}
											</div>
											<div className='pb-2'>
												Lieferung: {shipping.DeliveryPeriod}
											</div>
										</div>
									))}
								</Dropdown.ItemText>
							</Dropdown.Menu>
						</Dropdown>
					</Row>
					<Row className='dropdown-row'>
						<Dropdown>
							<Dropdown.Toggle>Bezahlung</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.ItemText className='pb-3'>
									{payments.map((payment, index) =>
										index === payments.length - 1 ? (
											<span>{payment.Type}</span>
										) : (
											<span>{payment.Type}, </span>
										)
									)}
								</Dropdown.ItemText>
							</Dropdown.Menu>
						</Dropdown>
					</Row>
					<Row className='last-dropdown-row'>
						<hr className='last-dropdown' />
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default ProductScreen
