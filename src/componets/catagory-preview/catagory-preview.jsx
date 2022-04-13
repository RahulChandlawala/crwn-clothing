import ProductCard from "../collection-preview/collection-preview";
import "./catagory-preview.scss";

const CatagoryPreview = ({ title, product }) => {
	return (
		<div className="catagory-preview-container">
			<h2>
				<span className="title">{title.toUpperCase()}</span>
			</h2>

			<div className="preview">
				{product
					.filter((_, i) => i < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CatagoryPreview;
