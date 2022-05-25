import React from 'react'
import { Modal } from 'react-bootstrap'

const ImageModal = (props) => {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<img
					src={props.sizesTable}
					alt='sizesTable'
					width='1080'
					className='img-fluid'
				/>
			</Modal.Body>
		</Modal>
	)
}

export default ImageModal
