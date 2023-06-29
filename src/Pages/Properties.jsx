/** @format */

import React, { useState, useEffect, useContext } from 'react';
import { db } from '../Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ProptyModal from './ProptyModal';
import '../css/properties.css';
import DataContext from '../context/DataProvider';

const Properties = () => {
	const [propty, setPropty] = useState([]);
	const [proptyCard, setProptyCard] = useState({});
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const { setBookItem } = useContext(DataContext);

	useEffect(() => {
		const unsub = onSnapshot(
			collection(db, 'properties'),
			(snapshot) => {
				let list = [];
				snapshot.docs.forEach((doc) => {
					list.push({ id: doc.id, ...doc.data() });
				});
				setPropty(list);
			},
			(error) => console.log(error),
		);

		return () => {
			unsub();
		};
	}, []);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const handleShow = (item) => {
		setShow(true);
		setProptyCard(item);
	};

	const handleBooking = () => {
		navigate('/bookinspeciton');
	};

	return (
		<React.Fragment>
			<div className="container-fluid property-cards">
				<div className="row">
					{propty &&
						propty.map((item) => {
							return (
								<div
									key={item.id}
									className="col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
									<div className="card">
										<img src={item.img} className="card-img-top" />
										<div className="card-body">
											<h3 className="card-title">{item.name}</h3>
											<h3 className="card-text">Size: {item.size}</h3>
											<h3 className="card-text">Location: {item.location}</h3>

											<Button
												className="btn btn-primary"
												onClick={() => handleShow(item)}>
												Learn more
											</Button>

											<button
												className="btn btn-primary"
												onClick={() => {
													setBookItem(item);
													navigate('/bookinspeciton');
												}}>
												Book Inspection
											</button>
										</div>
									</div>
									{show && (
										<ProptyModal
											handleDelete={() => console.log('delete')}
											img={item.img}
											vid={item.vid}
											name={item.name}
											id={item.id}
											title={item.title}
											description={item.description}
											location={item.location}
											features={item.features}
											price={item.price}
											size={item.size}
											open={open}
											setOpen={setOpen}
											handleClose={handleClose}
											handleShow={handleShow}
											show={show}
											{...proptyCard}
										/>
									)}
								</div>
							);
						})}
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default Properties;
