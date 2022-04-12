import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import { UserContext } from "../../context/user";
import { SignOutUser } from "../../firebase/firebase";
import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
// import { signOutUser } from "../../utils/firebase/firebase.utils";

const Header = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={SignOutUser}>
						SIGN OUT{" "}
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
