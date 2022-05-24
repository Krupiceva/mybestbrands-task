import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar
				style={{ backgroundColor: '#000' }}
				variant='dark'
				expand='lg'
				collapseOnSelect>
				<Container fluid>
					<Navbar.Brand href='/'>
						<a href='/'>
							<img
								style={{
									height: '1.1rem',
									marginLeft: '10px',
								}}
								src='https://www.mybestbrands.de/eaglestatic/icons/mbb-logo-white.svg'
								alt='Mybestbrands logo'></img>
						</a>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<span className='nav-heart'></span>
							<Nav.Link href='#merkliste'>Merkliste</Nav.Link>
							<span className='topnav_nav-separator'>|</span>
							<Nav.Link href='#registrieren'>Registrieren</Nav.Link>
							<span className='topnav_nav-separator'>|</span>
							<Nav.Link href='#login'>Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
