import React from "react";
import CollectionItem from "../collection-item/collection-item.jsx";
import "./collection-preview.scss";

const CollationPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idc) => idc < 4)
					.map((item) => (
						<CollectionItem
							key={item.id}
							imageUrl={item.imageUrl}
							price={item.price}
							name={item.name}
							id={item.id}
						/>
					))}
			</div>
		</div>
	);
};

export default CollationPreview;
