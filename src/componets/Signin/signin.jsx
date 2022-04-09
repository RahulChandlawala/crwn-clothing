import React from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./signin.scss";

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
						name="Email"
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
					<CustomButton children="SIGN iN" />
					{/* <input type="submit" value="Submit form" /> */}
				</form>
			</div>
		);
	}
}

export default SignIn;
