import React, { useState, useEffect } from 'react'
import { Row, Col, Image, Dropdown } from 'react-bootstrap'
import ImageModal from '../components/ImageModal'
import DropdownCustomToggle from '../components/DropdownCustomToggle'
import axios from 'axios'

const ProductScreen = (props) => {
	const { match } = props
	const [product, setProduct] = useState(undefined)

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await axios.get(`/api/products/${match.params.id}`)
			const { data } = res
			setProduct(data)
		}

		fetchProduct()
	}, [match])

	const [modalShow, setModalShow] = useState(false)

	return (
		<>
			{product && (
				<Row className='py-5'>
					<Col md={1}></Col>
					<Col md={6}>
						<Image
							width='80%'
							className='detail-image'
							fluid
							src={
								product.Details.Media.ThumbnailImagePath.split('.jpg')[0] +
								'_xxl.jpg'
							}
							alt='item-image'></Image>
					</Col>
					<Col md={5} className='pe-4'>
						<Row>
							<Col>
								<div className='brand-name'>{product.Brand.Name}</div>
								<div className='product-category'>
									{product.DealClassification.SubTag
										? product.DealClassification.SubTag.Name
										: product.DealClassification.ProductTag.Name}
								</div>
							</Col>
							<Col className='detail-like-col'>
								<Image
									className='detail-like'
									src='https://www.mybestbrands.de/eaglestatic/icons/black-heart-large-outline.svg'></Image>
							</Col>
						</Row>

						<Row className='mb-4'>
							{product.Pricing.Price.Amount / 100 ===
							product.Pricing.DiscountedPrice.Amount / 100 ? (
								<div>{product.Pricing.Price.FormattedString} &euro;</div>
							) : (
								<div>
									<span className='detail-new-price'>
										{product.Pricing.DiscountedPrice.FormattedString} &euro;
									</span>
									<span className='price-separator'>|</span>
									<span className='detail-old-price'>
										{product.Pricing.Price.FormattedString} &euro;
									</span>
								</div>
							)}
						</Row>
						<Row className='mb-4'>
							<Col>
								<a
									className='zum-shop-btn'
									href={product.Details.Links.DealTargetUrl}>
									Zum shop <strong>{product.Retailer.Name}</strong>
								</a>
							</Col>
						</Row>
						<Row className='dropdown-row'>
							<Dropdown>
								<DropdownCustomToggle name='Verfügbare Größen' />
								<Dropdown.Menu>
									<Dropdown.ItemText className='pb-3'>
										{product.Details.AvailableSizes.split('|').map(
											(size, index) =>
												index === 0 ? (
													<span key={index} className='pe-3'>
														{size}
													</span>
												) : (
													<span key={index} className='px-3'>
														{size}
													</span>
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
								<DropdownCustomToggle name='Produktdetails' />
								<Dropdown.Menu>
									<Dropdown.ItemText className='pb-3'>
										<div className='pb-3'>{product.Details.Description}</div>
										{product.Details.Material && (
											<div>Material: {product.Details.Material}</div>
										)}
									</Dropdown.ItemText>
								</Dropdown.Menu>
							</Dropdown>
						</Row>
						<Row className='dropdown-row'>
							<Dropdown>
								<DropdownCustomToggle name='Versand' />
								<Dropdown.Menu>
									<Dropdown.ItemText className='pb-3'>
										{product.Retailer.Shippings.map((shipping, index) => (
											<div key={index}>
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
								<DropdownCustomToggle name='Bezahlung' />
								<Dropdown.Menu>
									<Dropdown.ItemText className='pb-3'>
										{product.Retailer.PaymentTypes.map((payment, index) =>
											index === product.Retailer.PaymentTypes.length - 1 ? (
												<span key={index}>{payment.Type}</span>
											) : (
												<span key={index}>{payment.Type}, </span>
											)
										)}
									</Dropdown.ItemText>
								</Dropdown.Menu>
							</Dropdown>
						</Row>
						<Row className='last-dropdown-row'>
							<hr className='last-dropdown' />
						</Row>
						<Row className='pb-3'>
							<Col className='detail-category-links'>
								<a href='#categorybrand'>
									Mehr von {product.DealClassification.ProductTag.Name}{' '}
									{product.Brand.Name}{' '}
								</a>
								<a className='ms-3' href='#category'>
									{product.DealClassification.ProductTag.Name}
								</a>
							</Col>
						</Row>
						<Row>
							<Col xs={1}>
								<a href='#facebook'>
									<svg
										width='1.3rem'
										height='2rem'
										viewBox='0 0 1024 1024'
										version='1.1'
										xmlns='http://www.w3.org/2000/svg'
										fill='#000'>
										<path d='M767.428571 6.857143v150.857143H677.714286q-49.142857 0-66.285715 20.571428t-17.142857 61.714286v108h167.428572l-22.285715 169.142857H594.285714v433.714286H419.428571V517.142857H273.714286V348h145.714285V223.428571q0-106.285714 59.428572-164.857142T637.142857 0q84 0 130.285714 6.857143z'></path>
									</svg>
								</a>
							</Col>
							<Col xs={1}>
								<a href='#pinterest'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 374.89 481.51'
										fill='#000'
										width='1rem'
										height='2rem'>
										<path
											d='M437.45,189.61c-1,8.24-1.77,16.53-3.11,24.73-6.25,38.22-20,73.2-46.28,102.25-26.48,29.25-59.43,44.1-99.23,43.46A87.57,87.57,0,0,1,239.14,344c-6.43-4.45-13-8.76-19.46-13.1-.82-.55-1.75-.93-3.07-1.62-1.61,8-3,15.67-4.71,23.26-6,26.65-12.13,53.23-23.16,78.39-9.86,22.48-22.72,42.77-42.25,58.22-1,.78-2,1.48-3.57,2.62-.62-5-1.27-9.52-1.73-14-3.44-33.94-2-67.8,5.11-101.06,7.94-36.93,17.69-73.47,26.61-110.18q3.27-13.44,6.21-27a7.19,7.19,0,0,0-.29-4.39c-11.26-22.7-11.51-46.18-4.9-70.07,4.36-15.74,11.55-29.89,24.73-40.23,16.69-13.09,41.93-11.16,56.4,4.3,6.55,7,8.09,15.87,8.2,25,.15,12.69-3,24.9-6.4,37-5.76,20.2-12,40.28-17.48,60.55a71.24,71.24,0,0,0-2.29,27.45c1.85,15.22,10.8,25.69,25.55,29.79,29.7,8.26,53.43-1.49,72.55-24.35,16.88-20.19,25.77-44.12,31-69.53,5.56-26.94,6-53.91-.18-80.88-8.86-38.55-33.68-62.36-70.23-74.18-37.14-12-72.77-5.66-106.54,12.61-22.66,12.26-41.06,29.29-54.43,51.44-14.81,24.53-20.74,51-17.47,79.61,1.21,10.6,5.08,20,10.51,29a125.85,125.85,0,0,1,8.2,15.21c6,14.08,2,27.1-5,39.6-.35.62-2,1-2.82.79-27.77-6.57-47.64-22.39-57.68-49.59a129.27,129.27,0,0,1-7.21-34.13,41.12,41.12,0,0,0-.75-4.09V175c.64-5.05,1.16-10.12,1.94-15.15A160.28,160.28,0,0,1,102.84,77.3C134.38,41.23,174,19.81,221.38,12.64c6.81-1,13.69-1.61,20.54-2.39h25.4A30.77,30.77,0,0,0,271,11c31.71,2.24,62,9.63,89.74,25.61,42.12,24.28,67.72,60.07,74.51,108.66.85,6.06,1.46,12.14,2.18,18.22Z'
											transform='translate(-62.55 -10.25)'></path>
									</svg>
								</a>
							</Col>
						</Row>
					</Col>
				</Row>
			)}
		</>
	)
}

export default ProductScreen
