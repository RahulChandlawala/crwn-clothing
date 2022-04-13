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

const removeCartItem = (cartItem, cartItemToRemove) => {
	const existingCartItem = cartItem.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItem.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	return cartItem.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItem, cartItemToClear) =>
	cartItem.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
	IsCartOpen: false,
	setIsOpen: () => {},
	cartItem: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [IsCartOpen, setIsCartOpen] = useState(false);
	const [cartItem, setCartItem] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItem(addCartItem(cartItem, productToAdd));
	};
	const removeItemToCart = (cartItemToRemove) => {
		setCartItem(removeCartItem(cartItem, cartItemToRemove));
	};
	const clearItemFromCart = (cartItemToClear) => {
		setCartItem(clearCartItem(cartItem, cartItemToClear));
	};
	const value = {
		IsCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItem,
		removeItemToCart,
		clearItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
