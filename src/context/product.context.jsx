import { createContext, useState } from "react";
import SHOP_DATA from "../pages/shop/shop.data";

export const ProductContext = createContext({
	Products: [],
});

export const ProductProvider = ({ children }) => {
	const [Products, setProducts] = useState(SHOP_DATA);
	const value = { Products };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
