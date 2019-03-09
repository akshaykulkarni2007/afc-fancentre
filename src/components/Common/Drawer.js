import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import Aux from "../HOC/Auxiliary"

// Material
import {
	withStyles,
	Drawer,
	List,
	ListItem,
	Collapse,
	Divider
} from "@material-ui/core/"
import { ExpandLess, ChevronRight } from "@material-ui/icons"

const styles = {
	list: {
		width: 250
	},
	fullList: {
		width: "auto"
	},
	listItem: {
		padding: 0
	},
	linkBox: {
		display: "flex",
		flexGrow: 1,
		padding: "1rem",
		justifyContent: "space-around"
	},
	link: {
		color: "#fe000c !important",
		width: "100%"
	},
	subLink: {
		paddingLeft: "2.5rem"
	}
}

class TemporaryDrawer extends Component {
	classes = this.props.classes

	itemsWithCollapse = (item, index) => (
		<Aux key={item.title}>
			<ListItem
				button
				className={this.classes.listItem}
				onClick={() => this.props.handleCollapse(index)}>
				<span className={this.classes.linkBox}>
					<Link to={item.link} className={this.classes.link}>
						{item.title}
					</Link>
					{this.props.collapse[index].open ? (
						<Link to={item.link} className={this.classes.link}>
							<ExpandLess />
						</Link>
					) : (
						<Link to={item.link} className={this.classes.link}>
							<ChevronRight />
						</Link>
					)}
				</span>
			</ListItem>

			{item.subItems.map(subitem => (
				<Collapse
					key={subitem.title}
					in={this.props.collapse[index].open}
					timeout="auto"
					unmountOnExit>
					<List component="div" disablePadding>
						<ListItem
							button
							className={[
								this.classes.nested,
								this.classes.subLink,
								this.classes.listItem
							].join(" ")}
							onClick={this.props.toggleDrawer("left", false)}>
							<span className={this.classes.linkBox}>
								<Link
									to={subitem.link}
									className={this.classes.link}
									onClick={subitem.onClick}>
									{subitem.title}
								</Link>
							</span>
						</ListItem>
					</List>
				</Collapse>
			))}
		</Aux>
	)

	render() {
		const authLinks = this.props.isAuthenticated ? (
			this.itemsWithCollapse(
				{
					title: this.props.user.name,
					link: "/",
					subItems: [
						{ title: "My Account", link: "/my-account" },
						{
							title: "Logout",
							link: "",
							onClick: this.props.logoutAction.bind(this)
						}
					]
				},
				2
			)
		) : (
			<Aux>
				<ListItem
					button
					className={this.classes.listItem}
					onClick={this.props.toggleDrawer("left", false)}
					style={{ paddingTop: "1rem" }}>
					<span className={this.classes.linkBox}>
						<Link to="/auth" className={this.classes.link}>
							Login
						</Link>
					</span>
				</ListItem>
			</Aux>
		)

		const menu = this.props.navItems.map((item, index) =>
			!Array.isArray(item.subItems) ? (
				<Aux key={item.title}>
					{index === 0 ? <Divider /> : ""}
					<ListItem
						className={this.classes.listItem}
						index={index}
						button
						onClick={this.props.toggleDrawer("left", false)}>
						<span className={this.classes.linkBox}>
							<Link to={item.link} className={this.classes.link}>
								{item.title}
							</Link>
						</span>
					</ListItem>
				</Aux>
			) : (
				((index -= 1), this.itemsWithCollapse(item, index))
			)
		)

		const sideList = (
			<div className={this.classes.list}>
				<List component="nav">{menu}</List>
			</div>
		)

		return (
			<div id="drawer">
				<Drawer
					open={this.props.left}
					onClose={this.props.toggleDrawer("left", false)}>
					<div
						tabIndex={0}
						role="button"
						onKeyDown={this.props.toggleDrawer("left", false)}>
						{authLinks}
						{sideList}
					</div>
				</Drawer>
			</div>
		)
	}
}

TemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TemporaryDrawer)
