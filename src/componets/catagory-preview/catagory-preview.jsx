// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductCard from "../collection-preview/collection-preview";
import "./catagory-preview.scss";

const CatagoryPreview = ({ title, product }) => {
	return (
		<div className="catagory-preview-container">
			<h2>
				<Link to={title} className="title">
					{title.toUpperCase()}
				</Link>
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
