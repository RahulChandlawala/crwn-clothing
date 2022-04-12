import { createUser } from "../../firebase/firebase";
import React from "react";
import { auth, createUsersProfileDocument } from "../../firebase/firebase";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";
import { getDoc, setDoc } from "firebase/firestore";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			comfirmPassword: "",
		};
	}
	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, comfirmPassword } = this.state;

		if (password !== comfirmPassword) {
			alert("password Dont match");
			return;
		}

		try {
			const { user } = await createUser(email, password);

			await createUsersProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				comfirmPassword: "",
			});
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				alert("cannot create the user,email already in use");
			} else {
				console.error(err);
			}
		}
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, comfirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit} className="sign-up-form">
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					></FormInput>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					></FormInput>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Enter password"
						required
					></FormInput>
					<FormInput
						type="password"
						name="comfirmPassword"
						value={comfirmPassword}
						onChange={this.handleChange}
						label="Comfirm Password"
						required
					></FormInput>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
