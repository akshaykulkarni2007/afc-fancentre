import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"

// redux
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

// custom components
import LoggedInMenu from "./LoggedInMenu"
import Drawer from "./Drawer"

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
import { ExpandMore } from "@material-ui/icons"

// CSS
import "./Common.css"

class Navigation extends Component {
	state = {
		navItems: [
			{ title: "Home", link: "/", subItems: "" },
			{
				title: "Club",
				link: "#!",
				subItems: [
					{ title: "Players", link: "/club/players" },
					{ title: "The Season", link: "/club/season" },
					{ title: "History", link: "/club/history" },
					{ title: "Records", link: "/club/records" },
					{ title: "Gallery", link: "/club/gallery" }
				]
			},
			{
				title: "Fancenter",
				link: "#!",
				subItems: [
					{ title: "Feed", link: "/fans/feed" },
					{ title: "Media", link: "/fans/media" },
					{ title: "Messages", link: "/fans/messages" },
					{ title: "Polls", link: "/fans/polls" }
				]
			},
			{ title: "About", link: "/about", subItems: "" }
		],
		left: false,
		dropDown: [
			{ title: "Club", open: false },
			{ title: "Fans", open: false },
			{ title: "Account", open: false }
		]
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
			left: "-30px",
			width: "150px",
			color: "#000"
		},
		subLink: {
			textAlign: "center",
			color: "#fe000c",
			background: "#fff"
		},
		expandArrow: {
			position: "relative",
			top: "5px",
			left: "5px"
		}
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		})
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
		this.props.logoutUser(this.props.history)
	}

	itemsWithDropdown = (item, index) => (
		<div key={item.title} style={{ position: "relative" }}>
			<Link
				to={item.link}
				style={this.styles.navLink}
				onMouseEnter={() => this.handleDropDown(index)}
				onMouseLeave={() => this.handleDropDown(index)}>
				{item.title} <ExpandMore style={this.styles.expandArrow} />
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
							<Link to={subitem.link} onClick={subitem.onClick}>
								{subitem.title}
							</Link>
						</ListItem>
					))}
				</Paper>
			) : null}
		</div>
	)

	render() {
		const authLinks = this.props.auth.isAuthenticated ? (
			this.itemsWithDropdown(
				LoggedInMenu(this.props.auth, this.logoutAction),
				2
			)
		) : (
			<Link to="/auth" style={this.styles.navLink}>
				Login
			</Link>
		)

		const menu = this.state.navItems.map((item, index) =>
			!Array.isArray(item.subItems) ? (
				<Link to={item.link} key={item.title} style={this.styles.navLink}>
					{item.title}
				</Link>
			) : (
				((index -= 1), this.itemsWithDropdown(item, index))
			)
		)

		return (
			<div id="navbar" style={this.styles.root}>
				<Drawer
					navItems={this.state.navItems}
					isAuthenticated={this.props.auth.isAuthenticated}
					user={this.props.auth}
					logoutAction={this.logoutAction}
					collapse={this.state.dropDown}
					left={this.state.left}
					toggleDrawer={this.toggleDrawer}
					handleCollapse={this.handleDropDown}
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
)(withRouter(Navigation))
