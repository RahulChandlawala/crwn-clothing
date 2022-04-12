import React, { useContext } from "react";
import CollationPreview from "../../componets/collection-preview/collection-preview";
import { ProductContext } from "../../context/product.context";

const ShopPage = () => {
	const { Products } = useContext(ProductContext);
	console.log(Products);
	// console.log(collections);

	return (
		<div className="shop-page">
			{Products.map(({ id, items, title, price, imageUrl }) => (
				<CollationPreview
					key={id}
					items={items}
					title={title}
					price={price}
					imageurl={imageUrl}
				/>
			))}
		</div>
	);
};

export default ShopPage;
