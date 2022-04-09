import React from "react";
import CollationPreview from "../../componets/collection-preview/collection-preview";
import SHOP_DATA from "./shop.data";
class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		// console.log(collections);
		return (
			<div className="shop-page">
				{collections.map(({ id, items, title, price, imageUrl }) => (
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
	}
}

export default ShopPage;
