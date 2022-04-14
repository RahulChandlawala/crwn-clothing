import React, { useContext } from "react";

import { CatagotiesContext } from "../../context/catagories.context";

import CatagoryPreview from "../../componets/catagory-preview/catagory-preview";

const CategoriesPreview = () => {
	const { CatagoriesMap } = useContext(CatagotiesContext);

	return (
		<div className="catagory-preview-container">
			{Object.keys(CatagoriesMap).map((key) => {
				const product = CatagoriesMap[key];
				return <CatagoryPreview key={key} title={key} product={product} />;
			})}
		</div>
	);
};

export default CategoriesPreview;
