import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";

const CartDropDown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-item"> </div>
			<CustomButton className="custom-button drop-down">checkout</CustomButton>
		</div>
	);
};

export default CartDropDown;
