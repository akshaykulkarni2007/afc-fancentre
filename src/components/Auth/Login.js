import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { connect } from "react-redux"
import { loginUser } from "../../actions/authActions"

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

		this.props.loginUser(user, this.props.history)
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/")
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/")
		}

		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}

	render() {
		const { classes } = this.props
		const { errors } = this.state

		return (
			<div id="login">
				<Typography variant="display1" className={classes.sectionTitle}>
					Login
				</Typography>
				<Typography
					variant="subheading"
					gutterBottom
					style={{ color: "green", marginTop: "1rem" }}>
					{this.props.auth.success
						? "Registration Successful. Please login"
						: ""}
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

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(
	mapStateToProps,
	{ loginUser }
)(withRouter(withStyles(styles)(Login)))
