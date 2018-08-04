import React, { Component } from "react"
import { Link } from "react-router-dom"

import { connect } from "react-redux"

import Drawer from "./Drawer"
import { logoutUser } from "../../actions/authActions"

// Material
import {
	AppBar,
	Hidden,
	Toolbar,
	Typography,
	IconButton,
	Paper,
	ListItem
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

// CSS
import "./Common.css"

class Navigation extends Component {
	state = {
		navItems: [
			{ title: "Home", link: "/", subItems: "" },
			{ title: "Players", link: "/players", subItems: "" },
			{
				title: "Club",
				link: "#!",
				subItems: [
					{ title: "The Season", link: "/club/season" },
					{ title: "History", link: "/club/history" },
					{ title: "Records", link: "/club/records" },
					{ title: "Gallery", link: "/club/gallery" }
				]
			},
			{
				title: "Fans",
				link: "#!",
				subItems: [
					{ title: "Feed", link: "/fans/feed" },
					{ title: "Media", link: "/fans/media" },
					{ title: "Messages", link: "/fans/messages" },
					{ title: "Polls", link: "/fans/polls" }
				]
			},
			{ title: "About", link: "/about", subItems: "" }
			// { title: "Login", link: "/auth", subItems: "" }
			// { title: "Logout", link: "/", subItems: "", clickAction: "logoutAction" }
		],
		left: false,
		collapse: [{ title: "Club", open: false }, { title: "Fans", open: false }],
		dropDown: [{ title: "Club", open: false }, { title: "Fans", open: false }]
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
			background: "#fe000c"
		},
		navLink: {
			padding: "8px 16px",
			height: "50px",
			lineHeight: "50px"
		},
		paper: {
			position: "absolute",
			top: 40,
			left: "-40px",
			width: "150px",
			color: "#000"
		},
		subLink: {
			textAlign: "center",
			color: "#fe000c",
			background: "#fff"
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

	handleDropDown = index => {
		const dropDown = this.state.dropDown
		dropDown[index].open = !dropDown[index].open

		this.setState({ dropDown })
	}

	keepDropDownOpen = index => {
		const dropDown = this.state.dropDown
		dropDown[index].open = true

		this.setState({ dropDown })
	}

	logoutAction = e => {
		e.preventDefault()
		this.props.logoutUser()
	}

	render() {
		const authLinks = this.props.auth.isAuthenticated ? (
			<Link
				to=""
				style={this.styles.navLink}
				onClick={this.logoutAction.bind(this)}>
				Logout
			</Link>
		) : (
			<Link to="/auth" style={this.styles.navLink}>
				Login
			</Link>
		)

		const menu = this.state.navItems.map(
			(item, index) =>
				!Array.isArray(item.subItems) ? (
					<Link to={item.link} key={item.title} style={this.styles.navLink}>
						{item.title}
					</Link>
				) : (
					((index -= 2),
					(
						<div key={item.title} style={{ position: "relative" }}>
							<Link
								to={item.link}
								style={this.styles.navLink}
								onMouseEnter={() => this.handleDropDown(index)}
								onMouseLeave={() => this.handleDropDown(index)}>
								{item.title}
							</Link>
							{this.state.dropDown[index].open ? (
								<Paper
									style={this.styles.paper}
									onMouseEnter={() => this.keepDropDownOpen(index)}
									onMouseLeave={() => this.handleDropDown(index)}
									onClick={() => this.handleDropDown(index)}>
									{item.subItems.map(subitem => (
										<ListItem
											key={subitem.title}
											style={this.styles.subLink}
											className="nav-drowdown-link">
											<Link to={subitem.link}>{subitem.title}</Link>
										</ListItem>
									))}
								</Paper>
							) : null}
						</div>
					))
				)
		)

		return (
			<div className={this.styles.root}>
				<Drawer
					navItems={this.state.navItems}
					authLinks={authLinks}
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
						<Hidden mdDown>
							{menu}
							{authLinks}
						</Hidden>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Navigation)
