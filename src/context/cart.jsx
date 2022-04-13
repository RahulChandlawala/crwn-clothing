import { createContext, useState } from "react";

export const addCartItem = (cartItem, productToAdd) => {
	const existingCartItem = cartItem.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItem.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	IsCartOpen: false,
	setIsOpen: () => {},
	cartItem: [],
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [IsCartOpen, setIsCartOpen] = useState(false);
	const [cartItem, setCartItem] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItem(addCartItem(cartItem, productToAdd));
	};
	const value = { IsCartOpen, setIsCartOpen, addItemToCart, cartItem };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
