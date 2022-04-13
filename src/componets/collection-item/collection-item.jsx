import { useContext } from "react";
import { CartContext } from "../../context/cart";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.scss";
const CollectionItem = ({ name, price, imageUrl, key, id }) => {
	// const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () =>
		addItemToCart({ name, price, imageUrl, key, id });
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>

			<CustomButton
				className={`custom-button inverted`}
				type="inverted"
				onClick={addProductToCart}
			>
				add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
