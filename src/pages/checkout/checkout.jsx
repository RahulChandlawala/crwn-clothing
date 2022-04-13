import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./checkout.scss";

import CheckOutItem from "../../componets/checkout-item/checkout-item";

const CheckOut = () => {
	const { cartItem } = useContext(CartContext);
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItem.map((cartItem) => (
				<CheckOutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<span className="total">
				Total : ${""}
				{cartItem.reduce(
					(total, item) => total + item.quantity * item.price,
					0
				)}
			</span>
		</div>
	);
};

export default CheckOut;
