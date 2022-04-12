import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.scss";
const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>

			<CustomButton className={`custom-button inverted`} type="inverted">
				add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
