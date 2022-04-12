import React, { useContext, useState } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./signin.scss";
import { NormalSignIn, signInWithGoogle } from "../../firebase/firebase";
import { UserContext } from "../../context/user";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignIn = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const { setcurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handlesubmit = async (e) => {
		e.preventDefault();
		try {
			const { user } = await NormalSignIn(email, password);
			resetFormFields();
			setcurrentUser(user);
		} catch (err) {
			switch (err.code) {
				case "auth/wrong-password":
					alert("Incorrect Password");
					break;
				case "auth/user-not-found":
					alert("User not Fond");
					break;
				default:
					console.log(err);
			}
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sing in with ypur Email and password</span>

			<form onSubmit={handlesubmit}>
				<FormInput
					type="email"
					name="email"
					label="Email"
					handleChange={handleChange}
					value={email}
					required
				/>

				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<div className="button">
					<CustomButton type="submit">SIGN IN</CustomButton>
					<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIN>
						Sign in With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
