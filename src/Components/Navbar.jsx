/** @format */

import React, { useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import DataContext from '../context/DataProvider';
import '../css/bar.css';

const Navbar = () => {
	const { setNavOpen } = useContext(DataContext);

	const openNav = () => {
		setNavOpen(true);
	};

	return (
		<nav className="navbar">
			<span onClick={openNav}>
				<FaIcons.FaBars />
			</span>
			<h2>Zaniah Properties</h2>
		</nav>
	);
};

export default Navbar;
