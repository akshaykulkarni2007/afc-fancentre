import React from "react"
import { Link } from "react-router-dom"

// custom components
import LoggedInMenu from "./LoggedInMenu"
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

const TemporaryDrawer = props => {
	const classes = props.classes

	const itemsWithCollapse = (item, index) => (
		<Aux key={item.title}>
			<ListItem
				button
				className={classes.listItem}
				onClick={() => props.handleCollapse(index)}>
				<span className={classes.linkBox}>
					<Link to={item.link} className={classes.link}>
						{item.title}
					</Link>
					{props.collapse[index].open ? (
						<Link to={item.link} className={classes.link}>
							<ExpandLess />
						</Link>
					) : (
						<Link to={item.link} className={classes.link}>
							<ChevronRight />
						</Link>
					)}
				</span>
			</ListItem>

			{item.subItems.map(subitem => (
				<Collapse
					key={subitem.title}
					in={props.collapse[index].open}
					timeout="auto"
					unmountOnExit>
					<List component="div" disablePadding>
						<ListItem
							button
							className={[
								classes.nested,
								classes.subLink,
								classes.listItem
							].join(" ")}
							onClick={props.toggleDrawer("left", false)}>
							<span className={classes.linkBox}>
								<Link
									to={subitem.link}
									className={classes.link}
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

	const authLinks = props.isAuthenticated ? (
		itemsWithCollapse(LoggedInMenu(props.user, props.logoutAction), 2)
	) : (
		<Aux>
			<ListItem
				button
				className={classes.listItem}
				onClick={props.toggleDrawer("left", false)}
				style={{ paddingTop: "1rem" }}>
				<span className={classes.linkBox}>
					<Link to="/auth" className={classes.link}>
						Login
					</Link>
				</span>
			</ListItem>
		</Aux>
	)

	const menu = props.navItems.map((item, index) =>
		!Array.isArray(item.subItems) ? (
			<Aux key={item.title}>
				{index === 0 ? <Divider /> : ""}
				<ListItem
					className={classes.listItem}
					index={index}
					button
					onClick={props.toggleDrawer("left", false)}>
					<span className={classes.linkBox}>
						<Link to={item.link} className={classes.link}>
							{item.title}
						</Link>
					</span>
				</ListItem>
			</Aux>
		) : (
			((index -= 1), itemsWithCollapse(item, index))
		)
	)

	const sideList = (
		<div className={classes.list}>
			<List component="nav">{menu}</List>
		</div>
	)

	return (
		<div id="drawer">
			<Drawer open={props.left} onClose={props.toggleDrawer("left", false)}>
				<div
					tabIndex={0}
					role="button"
					onKeyDown={props.toggleDrawer("left", false)}>
					{authLinks}
					{sideList}
				</div>
			</Drawer>
		</div>
	)
}

export default withStyles(styles)(TemporaryDrawer)
