import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"

import Axios from "../HOC/Axios"
import FormInput from "../UI/FormInput"

// Material
import { withStyles, Typography, Button } from "@material-ui/core"

const styles = theme => ({
	sectionTitle: {
		color: "#000",
		marginBottom: "1rem"
	}
})

class Login extends Component {
	state = {
		email: "",
		password: "",
		errors: {}
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	loginAction = () => {
		const user = {
			email: this.state.email,
			password: this.state.password
		}

		// Axios.post("/api/users/login", user)
		// 	.then(res => this.props.history.push("/"))
		// 	.catch(err => this.setState({ errors: err.response.data }))

		this.props.registerUser(user)
	}

	render() {
		const { classes } = this.props
		const { errors } = this.state

		return (
			<div id="login">
				<Typography variant="display1" className={classes.sectionTitle}>
					Login
				</Typography>

				<form noValidate autoComplete="off">
					<FormInput
						label="Email ID"
						id="username"
						placeholder="Email"
						className="form-input"
						value={this.state.name}
						error={errors.email}
						onChange={this.handleChange("email")}
					/>

					<FormInput
						label="Password"
						type="password"
						id="password"
						placeholder="Password"
						className="form-input"
						value={this.state.password}
						error={errors.password}
						onChange={this.handleChange("password")}
					/>

					<Button
						variant="contained"
						size="large"
						className="btn btn-primary"
						onClick={this.loginAction}>
						Login
					</Button>
				</form>
			</div>
		)
	}
}

export default connect(
	null,
	{ registerUser }
)(withRouter(withStyles(styles)(Login)))
