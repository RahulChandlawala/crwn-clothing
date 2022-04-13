import React, { useContext } from "react";
import CollationPreview from "../../componets/collection-preview/collection-preview";
import { ProductContext } from "../../context/product.context";

const ShopPage = () => {
	const { Products } = useContext(ProductContext);

	return (
		<div className="shop-page">
			{Products.map((product) => (
				<CollationPreview key={product.id} product={product} />
			))}
		</div>
	);
};

export default ShopPage;
