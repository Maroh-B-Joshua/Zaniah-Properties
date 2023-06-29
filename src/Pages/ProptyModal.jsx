/** @format */

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProptyModal = ({
	img,
	name,
	id,
	title,
	description,
	location,
	features,
	price,
	size,
	isModalOpen,
	setIsModalOpen,
	handleClose,
	handleShow,
	show,
	open,
	setOpen,
	isOpen,
	onOpen,
	onClose,
	btnRef,
	scrollBehavior,
	vid,
}) => {
	return (
		<React.Fragment>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img src={img} alt="" />
					<h5>{location === '' ? '' : `Location ${location}`}</h5>
					<h5>{price === '' ? '' : `Price ${price}`}</h5>
					<h5>{size === '' ? '' : `Size ${size}`}</h5>
					<h5>{title === '' ? '' : `Title ${title}`}</h5>
					<p>{description}</p>
					{vid && <video src={vid}></video>}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default ProptyModal;
