import { createUser } from "../../firebase/firebase";
import React, { useState } from "react";
import { createUsersProfileDocument } from "../../firebase/firebase";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

import { UserContext } from "../../context/user";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("password Dont match");
			return;
		}

		try {
			const { user } = await createUser(email, password);

			await createUsersProfileDocument(user, { displayName });

			resetFormFields();
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				alert("cannot create the user,email already in use");
			} else {
				console.error(err);
			}
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit} className="sign-up-form">
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				></FormInput>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				></FormInput>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Enter password"
					required
				></FormInput>
				<FormInput
					type="password"
					name="comfirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Comfirm Password"
					required
				></FormInput>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
