import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Paginate(props) {
	const { pages, page, keyword = '' } = props

	return (
		pages > 1 && (
			<Pagination className='custom-pagination'>
				{[...Array(pages).keys()].map((x) => (
					<LinkContainer
						key={x + 1}
						to={
							keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`
						}>
						<Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
					</LinkContainer>
				))}
			</Pagination>
		)
	)
}

export default Paginate
