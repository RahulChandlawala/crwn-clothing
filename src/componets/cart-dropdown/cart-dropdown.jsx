import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";

const CartDropDown = () => {
	const { cartItem } = useContext(CartContext);

	const navigate = useNavigate();
	const { IsCartOpen, setIsCartOpen } = useContext(CartContext);

	const goTOCheckOut = () => {
		navigate("/checkout");
		setIsCartOpen(false);
	};
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItem.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<CustomButton className="custom-button drop-down" onClick={goTOCheckOut}>
				checkout
			</CustomButton>
		</div>
	);
};

export default CartDropDown;
