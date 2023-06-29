/** @format */

import React, { useState, createContext } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [navOpen, setNavOpen] = useState(false);
	const [bookItem, setBookItem] = useState({});

	return (
		<DataContext.Provider
			value={{
				navOpen,
				setNavOpen,
				bookItem,
				setBookItem,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
