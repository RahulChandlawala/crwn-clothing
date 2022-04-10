import React from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./signin.scss";
import { signInWithGoogle } from "../../firebase/firebase";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handlesubmit = (e) => {
		e.preventdefault();
		this.setState({ email: "", password: "" });
	};
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
						<CustomButton onClick={signInWithGoogle} isGoogleSignIN>
							Sign in With Google
						</CustomButton>
					</div>
					{/* <input type="submit" value="Submit form" /> */}
				</form>
			</div>
		);
	}
}

export default SignIn;
