/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<section className="home-page">
				<div className="showcase col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<div className="heading">
						<h3>Find Your Dream Property</h3>
						<button
							className="btn btn-outline-light"
							onClick={() => navigate('/properties')}>
							Get Started
						</button>
					</div>
				</div>
				<div className="container-fluid home-content">
					<div className="row">
						<div className="container p1">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<p className="">
										At zaniahproperties, we take a customer-centric approach to
										business. We believe that our customers should always come
										first, and we strive to provide the best possible service
										and experience for each and every one of them.
									</p>
									<br />
									<p>
										We are constantly expanding our portfolio of properties and
										investing in new developments, so that we can offer our
										customers a wide range of options to choose from. We also
										offer a number of unique benefits and services that are
										designed to make investing with us as easy and stress-free
										as possible.
									</p>
								</div>
							</div>
						</div>

						<div className="container p2">
							<h4> Benefits of investing with Zaniah Properties</h4>
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
									<div>
										<h5>A wide range of investment options</h5>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
									<div>
										<h5>Flexible investment terms</h5>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
									<div>
										<h5>A dedicated customer service team</h5>
									</div>
								</div>

								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
									<div>
										<h5>A commitment to customer satisfaction</h5>
									</div>
								</div>

								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
									<div>
										<h5>Fast Allocation</h5>
									</div>
								</div>

								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
									<div>
										<h5>Fast Document delivering </h5>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container get">
						<button
							className="btn btn-outline-primary get"
							onClick={() => navigate('/properties')}>
							Get Started
						</button>
					</div>
				</div>

				<div className="space">
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</section>
		</React.Fragment>
	);
};

export default Home;
