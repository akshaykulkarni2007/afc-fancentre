import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

// Material
import {
	withStyles,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Collapse
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
		color: "rgb(254, 0, 12) !important"
	},
	subLink: {
		paddingLeft: "2.5rem"
	}
}

class TemporaryDrawer extends Component {
	render() {
		const { classes } = this.props

		const menu = this.props.navItems.map(
			(item, index) =>
				!Array.isArray(item.subItems) ? (
					<ListItem
						key={item.title}
						button
						onClick={this.props.toggleDrawer("left", false)}>
						<ListItemText
							inset
							primary={
								<Link to={item.link} className={classes.link}>
									{item.title}
								</Link>
							}
						/>
					</ListItem>
				) : (
					((index -= 2),
					(
						<div key={item.title}>
							<ListItem button onClick={() => this.props.handleCollapse(index)}>
								<ListItemText
									inset
									primary={
										<Link to={item.link} className={classes.link}>
											{item.title}
										</Link>
									}
								/>
								{this.props.collapse[index].open ? (
									<Link to="" className={classes.link}>
										<ExpandLess />
									</Link>
								) : (
									<Link to="" className={classes.link}>
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
											className={classes.nested}
											onClick={this.props.toggleDrawer("left", false)}
											className={classes.subLink}>
											<ListItemText
												inset
												primary={
													<Link to={subitem.link} className={classes.link}>
														{subitem.title}
													</Link>
												}
											/>
										</ListItem>
									</List>
								</Collapse>
							))}
						</div>
					))
				)
		)

		const sideList = (
			<div className={classes.list}>
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
