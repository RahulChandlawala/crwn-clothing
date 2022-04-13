import { onSnapshot, SnapshotMetadata } from "firebase/firestore";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componets/header/header";
import { auth, createUsersProfileDocument } from "./firebase/firebase";
import CheckOut from "./pages/checkout/checkout";
import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.componet";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="shop/*" element={<ShopPage />} />
				<Route path="signin" element={<SignInAndSignOutPage />} />
				<Route path="checkout" element={<CheckOut />} />
			</Routes>
		</div>
	);
};

export default App;
