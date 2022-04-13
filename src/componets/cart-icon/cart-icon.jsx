import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
const CartIcon = () => {
	const { IsCartOpen, setIsCartOpen } = useContext(CartContext);
	const { cartItem } = useContext(CartContext);
	// const { quantity } = cartItem;
	console.log(cartItem);

	const toggleCart = () => setIsCartOpen(!IsCartOpen);

	return (
		<div className="cart-icon-container" onClick={toggleCart}>
			<ShoppingIcon className="shopping-icon" />
			{/* {cartItem.map((cartItem) => (
				<CartItem key={cartItem.id} cartItem={cartItem} />
			))} */}
			<span className="item-count">
				{cartItem.reduce((total, item) => total + item.quantity, 0)}
			</span>
		</div>
	);
};

export default CartIcon;
