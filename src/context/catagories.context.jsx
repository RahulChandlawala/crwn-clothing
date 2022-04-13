import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../pages/shop/shop.data";
import { getCatagoriesAndDocuments } from "../firebase/firebase";
export const CatagotiesContext = createContext({
	CatagoriesMap: {},
});

export const CatagoriesProvider = ({ children }) => {
	const [CatagoriesMap, setCatagoriesMap] = useState({});

	useEffect(() => {
		const getCatagoryMap = async () => {
			const catagoryMap = await getCatagoriesAndDocuments();

			setCatagoriesMap(catagoryMap);
		};
		getCatagoryMap();
	}, []);

	const value = { CatagoriesMap };
	return (
		<CatagotiesContext.Provider value={value}>
			{children}
		</CatagotiesContext.Provider>
	);
};
