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
	state = {
		navItems: [
			{ title: "Home", link: "/", subItems: "" },
			{ title: "Players", link: "/players", subItems: "" },
			{
				title: "Club",
				link: "",
				subItems: [
					{ title: "The Season", link: "/club/season" },
					{ title: "History", link: "/club/history" },
					{ title: "Records", link: "/club/records" },
					{ title: "Gallery", link: "/club/gallery" }
				]
			},
			{
				title: "Fans",
				link: "",
				subItems: [
					{ title: "Feed", link: "/fans/feed" },
					{ title: "Media", link: "/fans/media" },
          { title: "Messages", link: "/fans/messages" },
          {title: "Polls", link: "/fans/polls"}
				]
			},
			{ title: "About", link: "/about", subItems: "" },
			{ title: "Login", link: "/login", subItems: "" }
		],
		left: false,
		collapse: [{ title: "Club", open: false }, { title: "Fans", open: false }]
	}

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

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		})
	}

	handleCollapse = index => {
		const collapse = this.state.collapse
		collapse[index].open = !collapse[index].open

		this.setState({ collapse })
	}

	render() {
		const menu = this.state.navItems.map(item => (
			<Button key={item.title} color="inherit">
				<Link to={item.link}>{item.title}</Link>
			</Button>
		))

		return (
			<div className={this.styles.root}>
				<Drawer
					navItems={this.state.navItems}
					collapse={this.state.collapse}
					left={this.state.left}
					toggleDrawer={this.toggleDrawer}
					handleCollapse={this.handleCollapse}
				/>
				<AppBar position="static" style={this.styles.background}>
					<Toolbar>
						<Hidden lgUp>
						<IconButton
							style={this.styles.menuButton}
							color="inherit"
							onClick={this.toggleDrawer("left", true)}
							aria-label="Menu">
							<MenuIcon />
						</IconButton>
						</Hidden>
						<Typography
							variant="title"
							color="inherit"
							style={this.styles.flex}>
							<Link to="/">Arsenal Fan Centre</Link>
						</Typography>
						<Hidden mdDown>{menu}</Hidden>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default Navigation
