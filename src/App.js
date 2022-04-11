import { onSnapshot, SnapshotMetadata } from "firebase/firestore";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componets/header/header";
import { auth, createUsersProfileDocument } from "./firebase/firebase";
import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.componet";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscriberFromAuth = null;

	componentWillUnmount() {
		this.unsubscriberFromAuth();
	}
	componentDidMount() {
		this.unsubscriberFromAuth = auth.onAuthStateChanged((userAuth) => {
			const userDocRef = createUsersProfileDocument(userAuth);
		});
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/signin" element={<SignInAndSignOutPage />} />
				</Routes>
			</div>
		);
	}
}

export default App;
