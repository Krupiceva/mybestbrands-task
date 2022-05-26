import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function SearchBar(props) {
	const { history } = props
	const [keyword, setKeyword] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		if (keyword.trim()) {
			history.push(`/search/${keyword}`)
		} else {
			history.push('/')
		}
	}

	return (
		<Form onSubmit={submitHandler} className='d-flex'>
			<Form.Control
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Suchen marken...'
				className='mr-sm-2 ml-sm-5 mt-2'></Form.Control>
			<Button
				type='submit'
				variant='outline-dark'
				className='ms-2 mt-2 search-button'>
				Suchen
			</Button>
		</Form>
	)
}

export default SearchBar
