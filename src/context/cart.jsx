import { createContext, useState } from "react";

export const CartContext = createContext({
	IsCartOpen: false,
	setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
	const [IsCartOpen, setIsCartOpen] = useState(false);
	const value = { IsCartOpen, setIsCartOpen };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
