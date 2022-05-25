import React from 'react'
import { Dropdown, Row, Col, Image } from 'react-bootstrap'

const DropdownCustomToggle = ({ name }) => {
	return (
		<Dropdown.Toggle>
			<Row>
				<Col>{name}</Col>
				<Col className='dropdown-custom-toggle'>
					<Image src='https://www.mybestbrands.de/eaglestatic/icons/icon-down-arrow.png'></Image>
				</Col>
			</Row>
		</Dropdown.Toggle>
	)
}

export default DropdownCustomToggle
