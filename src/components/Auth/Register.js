import React, { Component } from "react"
import Axios from "../HOC/Axios"
import { withRouter } from "react-router-dom"
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
		name: "",
		email: "",
		password: "",
		password2: "",
		errors: {}
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	registerAction = () => {
		const newUser = {
			name: this.state.name,
			email: this.state.username,
			password: this.state.password,
			password2: this.state.password2
		}

		// Axios.post("/api/users/login", newUser)
		// 	.then(res => this.props.history.push("/"))
		// 	.catch(err => this.setState({ errors: err.response.data }))
	}

	render() {
		const { classes } = this.props
		const { errors } = this.state

		return (
			<div id="register">
				<Typography variant="display1" className={classes.sectionTitle}>
					Register
				</Typography>

				<form noValidate autoComplete="off">
					<FormInput
						label="Name"
						id="name"
						placeholder="Name"
						className="form-input"
						value={this.state.name}
						error={errors.name}
						onChange={this.handleChange("name")}
					/>
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
					<FormInput
						label="Repeat Password"
						type="password"
						id="password2"
						placeholder="Repeat Password"
						className="form-input"
						value={this.state.password2}
						error={errors.password2}
						onChange={this.handleChange("password2")}
					/>

					<Button
						variant="contained"
						size="large"
						className="btn btn-primary"
						onClick={this.registerAction}>
						Register
					</Button>
				</form>
			</div>
		)
	}
}

export default withRouter(withStyles(styles)(Login))
