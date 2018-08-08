import React, { Component } from "react"

import { connect } from "react-redux"
import { setActiveTab } from "../../actions/authActions"

import Login from "./Login"
import Register from "./Register"

// Material
import {
	withStyles,
	Tabs,
	Tab,
	Typography,
	AppBar,
	Card,
	CardContent,
	Grid
} from "@material-ui/core"

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	)
}

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#fff"
	},
	tabs: {
		marginTop: "5rem",
		backgroundColor: "#fff",
		color: "#fe000c"
	}
})

class Auth extends Component {
	state = {
		activeTab: 0
	}

	handleChange = (event, value) => {
		this.props.setActiveTab(value)
	}

	render() {
		const { classes } = this.props
		const { activeTab } = this.props.auth

		return (
			<div id="auth">
				<Grid container spacing={0} justify="center">
					<Grid item xs={12} md={6}>
						<AppBar className={classes.tabs} position="static">
							<Tabs value={activeTab} onChange={this.handleChange}>
								<Tab label="Login" />
								<Tab label="Register" />
							</Tabs>
						</AppBar>
						<Card className={classes.card} raised={true}>
							<CardContent className={classes.cardContent}>
								{activeTab === 0 && (
									<TabContainer>
										<Login />
									</TabContainer>
								)}
								{activeTab === 1 && (
									<TabContainer>
										<Register />
									</TabContainer>
								)}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(
	mapStateToProps,
	{ setActiveTab }
)(withStyles(styles)(Auth))
