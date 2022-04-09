import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componets/header/header";
import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.componet";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/signin" element={<SignInAndSignOutPage />} />
			</Routes>
		</div>
	);
}

export default App;
