import React, { Component } from "react"
import { Link } from "react-router-dom"

import Drawer from "./Drawer"

// Material
import {
	AppBar,
	Hidden,
	Toolbar,
	Typography,
	Button,
	IconButton
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

class Navigation extends Component {
	styles = {
		root: {
			flexGrow: 1
		},
		flex: {
			flex: 1
		},
		menuButton: {
			marginLeft: -12,
			marginRight: 20
		},
		background: {
			background: "rgb(254, 0, 12)"
		}
	}

	render() {
		return (
			<div className={this.styles.root}>
				<Drawer />
				<AppBar position="static" style={this.styles.background}>
					<Toolbar>
						<Hidden lgUp>
							<IconButton
								style={this.styles.menuButton}
								color="inherit"
								aria-label="Menu">
								<MenuIcon />
							</IconButton>
						</Hidden>
						<Typography variant="title" color="inherit" style={this.styles.flex}>
							Arsenal Fan Centre
						</Typography>
						<Hidden mdDown>
							<Button color="inherit">
								<Link to="/">Home</Link>
							</Button>
							<Button color="inherit">
								<Link to="/players">Players</Link>
							</Button>
							<Button color="inherit">Club</Button>
							<Button color="inherit">Fans</Button>
							<Button color="inherit">
								<Link to="/about">About</Link>
							</Button>
							<Button color="inherit">
								<Link to="/login">Login</Link>
							</Button>
						</Hidden>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
	
}

export default Navigation
