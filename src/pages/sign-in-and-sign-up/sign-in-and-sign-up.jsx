import React from "react";
import SignUp from "../../componets/Sign-up-form/sign-up";
import SignIn from "../../componets/Signin/signin";
import "./sign-in-and-sign-up.scss";

const SignInAndSignOutPage = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignOutPage;
