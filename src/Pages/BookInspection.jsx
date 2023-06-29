/** @format */

import React, { useEffect, useState, useContext } from 'react';
import * as BsIcons from 'react-icons/bs';
import { db, storage } from '../Firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import '../css/contact.css';
import {
	addDoc,
	collection,
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataProvider';

const initialState = {
	fullname: '',
	number: '',
	email: '',
	date: '',
	message: '',
	bookedpropty: '',
};

const BookInspection = () => {
	const [clientData, setClientData] = useState(initialState);
	const { fullname, number, email, date, message } = clientData;
	const { bookItem } = useContext(DataContext);
	const [error, setError] = useState('');
	const [isSubmit, setIsSubmit] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const onChange = (e) => {
		setClientData({ ...clientData, [e.target.name]: [e.target.value] });
	};

	useEffect(() => {
		setClientData({ ...clientData, bookedpropty: bookItem });
	}, []);

	const submit = async (e) => {
		e.preventDefault();
		setClientData({ ...clientData, bookedpropty: bookItem });

		try {
			await addDoc(collection(db, 'inspection'), {
				...clientData,
				timestamp: serverTimestamp(),
			});

			setTimeout(() => {
				setIsSending(false);
				setIsSubmit(true);
			}, 2000);

			setTimeout(() => {
				setIsSubmit(false);
			}, 5000);
		} catch (e) {
			console.log(e);
		}

		setClientData(initialState);
	};

	return (
		<React.Fragment>
			<section className="container-fluid inspection">
				<div className="row">
					<div
						className="sending col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
						style={isSending ? { display: 'block' } : { display: 'none' }}>
						<div>
							<h3>Sending . . .</h3>
						</div>
					</div>

					<h3>Book an Inspection</h3>

					<div
						className="sent col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
						style={isSubmit ? { display: 'block' } : { display: 'none' }}>
						<div>
							<h3>Successfully Sent </h3>
							<BsIcons.BsCheck2Circle />
						</div>
					</div>
					<form
						onSubmit={submit}
						action=""
						className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<div className="form-group">
							<label htmlFor="full-name">Full Name</label>
							<input
								type="text"
								name="fullname"
								id="fullname"
								value={fullname}
								onChange={onChange}
								className="form-control"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="full-name">Phone/WhatsApp Number</label>
							<input
								type="text"
								name="number"
								id="number"
								value={number}
								onChange={onChange}
								className="form-control"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="full-name">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={onChange}
								className="form-control"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="full-name">Prefered Date Of Inspection</label>
							<input
								type="date"
								name="date"
								id="date"
								value={date}
								onChange={onChange}
								className="form-control"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								className="form-control"
								name="message"
								id="message"
								value={message}
								onChange={onChange}
								placeholder="Optional . . . "
							/>
						</div>

						<div className="form-group">
							<input
								type="submit"
								value="submit"
								className="btn btn-outline-primary"
							/>
						</div>
					</form>
				</div>
			</section>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default BookInspection;
