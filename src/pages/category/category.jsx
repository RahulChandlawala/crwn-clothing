import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../componets/collection-preview/collection-preview";
import { CatagotiesContext } from "../../context/catagories.context";
import "./category.scss";

const Category = () => {
	const { catagory } = useParams();
	const { CatagoriesMap } = useContext(CatagotiesContext);
	const [products, setProduct] = useState(CatagoriesMap[catagory]);

	useEffect(() => {
		setProduct(CatagoriesMap[catagory]);
	}, [catagory, CatagoriesMap]);
	return (
		<>
			<h2 className="title">{catagory}</h2>
			<div className="category-container">
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</>
	);
};

export default Category;
