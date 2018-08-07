import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"

import FormInput from "../UI/FormInput"

// Material
import { withStyles, Typography, Button } from "@material-ui/core"

const styles = theme => ({
	sectionTitle: {
		color: "#000",
		marginBottom: "1rem"
	}
})

class Register extends Component {
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
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}

		this.props.registerUser(newUser, this.props.history)
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/")
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
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
						value={this.state.email}
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

					<Typography
						variant="subheading"
						style={{ color: "green", marginTop: "1rem" }}>
						{this.props.auth.success
							? "Registration Successful. Please login"
							: ""}
					</Typography>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(withStyles(styles)(Register)))
