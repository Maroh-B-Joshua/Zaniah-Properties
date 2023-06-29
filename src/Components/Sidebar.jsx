/** @format */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as RxIcons from 'react-icons/rx';
import DataContext from '../context/DataProvider';
import '../css/bar.css';

const Sidebar = () => {
	const { navOpen, setNavOpen } = useContext(DataContext);

	const closeNav = () => {
		setNavOpen(false);
	};

	return (
		<nav className="sidebar" style={navOpen ? { left: '0' } : { left: '-80%' }}>
			<div>
				<span onClick={closeNav} className="close">
					<RxIcons.RxCross1 />
				</span>
			</div>
			<ul>
				<li>
					<Link onClick={closeNav} to={'/'}>
						<span>Home</span>
						<></>
					</Link>
				</li>

				<li>
					<Link onClick={closeNav} to={'/properties'}>
						<span>Properties</span>
						<></>
					</Link>
				</li>

				<li>
					<Link onClick={closeNav} to={'/contact'}>
						<span>Contact</span>
						<></>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
