/** @format */

import React, { useState } from 'react';
import '../css/footer.css';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState();
	const [state, handleSubmit] = useForm('xknadgwe');
	if (state.succeeded) {
		setMessage('Successfully Subscribed');
	}

	return (
		<React.Fragment>
			<footer>
				<h5>
					<div>Get occational Mail on all our new Properties</div>
				</h5>
				<div className="container-fluid">
					<div className="row">
						<form
							onSubmit={handleSubmit}
							className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<div className="row">
								<div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										className="form-control"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<input
										type="submit"
										value="Subscribe"
										className="btn btn-primary"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="copy">
					<span>Copyright ©2023 | All rights reserved</span>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
