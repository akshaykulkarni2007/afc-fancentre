import React, { Component } from "react"
import Axios from "../HOC/Axios"

// Material
import {
	withStyles,
	Card,
	CardContent,
	Grid,
	Typography,
	Button
} from "@material-ui/core"

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	card: {
		margin: "5rem auto"
	},
	sectionTitle: {
		color: "#000"
	},
	cardContent: {
		"padding-bottom": "3rem !important",
		"padding-top": "3rem"
	}
})

class Login extends Component {
	state = {
		username: "",
		password: ""
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	loginAction = () => {
		const user = {
			email: this.state.username,
			password: this.state.password
		}

		Axios.post("/api/users/login", user)
			.then(res => this.props.history.push("/"))
			.catch(err => console.log(err.response.data))
	}

	render() {
		const { classes } = this.props

		return (
			<div id="login">
				<Grid container spacing={0} justify="center">
					<Grid item xs={12} md={6}>
						<Card className={classes.card} raised={true}>
							<CardContent className={classes.cardContent}>
								<Typography variant="display1" className={classes.sectionTitle}>
									Login
								</Typography>
								<form
									className={classes.container}
									noValidate
									autoComplete="off">
									<label className="form-label" htmlFor="username">
										Email ID
									</label>
									<input
										id="username"
										placeholder="Username or Email"
										className="form-input"
										value={this.state.name}
										onChange={this.handleChange("username")}
									/>

									<label className="form-label" htmlFor="password">
										Password
									</label>
									<input
										type="password"
										id="password"
										placeholder="Password"
										className="form-input"
										value={this.state.password}
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
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(Login)
