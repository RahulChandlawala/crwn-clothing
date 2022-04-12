import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
const CartIcon = () => {
	const { IsCartOpen, setIsCartOpen } = useContext(CartContext);
	console.log(CartContext);

	const toggleCart = () => setIsCartOpen(!IsCartOpen);

	return (
		<div className="cart-icon-container" onClick={toggleCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
