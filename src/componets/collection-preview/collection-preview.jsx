import React, { useContext } from "react";
import { CartContext } from "../../context/cart.jsx";
import CustomButton from "../custom-button/custom-button";
import "./collection-preview.scss";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton
				className="custom-button inverted"
				onClick={addProductToCart}
			>
				Add to card
			</CustomButton>
		</div>
	);
};

export default ProductCard;
