import React from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./signin.scss";
import { NormalSignIn, signInWithGoogle } from "../../firebase/firebase";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handlesubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;
		try {
			const res = await NormalSignIn(email, password);
			console.log(res);
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
	// this.setState({ email: "", password: "" });

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sing in with ypur Email and password</span>

				<form onSubmit={this.handlesubmit}>
					<FormInput
						type="email"
						name="email"
						label="Email"
						handleChange={this.handleChange}
						value={this.state.email}
						required
					/>

					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<div className="button">
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIN
						>
							Sign in With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
