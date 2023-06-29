/** @format */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Properties from './Pages/Properties';
import Contact from './Pages/Contact';
import BookInspection from './Pages/BookInspection';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<div className="body">
				<Router>
					<Sidebar />
					<Navbar />
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/properties" element={<Properties />} />
							<Route path="/bookinspeciton" element={<BookInspection />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</main>
					<Footer />
				</Router>
			</div>
		</React.Fragment>
	);
}

export default App;
