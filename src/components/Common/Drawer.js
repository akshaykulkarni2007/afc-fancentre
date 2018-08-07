import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

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
	link: {
		color: "#fe000c !important",
		width: "100%",
		paddingLeft: "56px"
	},
	subLink: {
		paddingLeft: "2.5rem"
	}
}

class TemporaryDrawer extends Component {
	classes = this.props.classes

	itemsWithCollapse = (item, index) => (
		<div key={item.title}>
			<ListItem button onClick={() => this.props.handleCollapse(index)}>
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
							className={[this.classes.nested, this.classes.subLink].join(" ")}
							onClick={this.props.toggleDrawer("left", false)}>
							<Link
								to={subitem.link}
								className={this.classes.link}
								onClick={subitem.onClick}>
								{subitem.title}
							</Link>
						</ListItem>
					</List>
				</Collapse>
			))}
		</div>
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
			<div>
				<ListItem
					button
					onClick={this.props.toggleDrawer("left", false)}
					style={{ paddingTop: "2rem", paddingBottom: "0.1rem" }}>
					<Link to="/auth" className={this.classes.link}>
						Login
					</Link>
				</ListItem>
			</div>
		)

		const menu = this.props.navItems.map(
			(item, index) =>
				!Array.isArray(item.subItems) ? (
					<div key={item.title}>
						{index === 0 ? <Divider /> : ""}
						<ListItem
							index={index}
							button
							onClick={this.props.toggleDrawer("left", false)}>
							<Link to={item.link} className={this.classes.link}>
								{item.title}
							</Link>
						</ListItem>
					</div>
				) : (
					((index -= 2), this.itemsWithCollapse(item, index))
				)
		)

		const sideList = (
			<div className={this.classes.list}>
				<List component="nav">{menu}</List>
			</div>
		)

		return (
			<div>
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
