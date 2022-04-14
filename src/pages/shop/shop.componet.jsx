import { Route, Routes } from "react-router-dom";
import Category from "../category/category";

import CategoriesPreview from "../cotegories-preview/categories-preview";
import "./shop.style.scss";
const ShopPage = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":catagory" element={<Category />} />
		</Routes>
	);
};

export default ShopPage;
