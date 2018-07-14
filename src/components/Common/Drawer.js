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
	Collapse,
	Divider
} from "@material-ui/core/"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

const styles = {
	list: {
    width: 250
	},
	fullList: {
		width: "auto"
	},
	link: {
		color: "rgb(254, 0, 12) !important"
	}
}

class TemporaryDrawer extends Component {
	render() {
		const { classes } = this.props

		const sideList = (
			<div className={classes.list}>
				<List component="nav">
					<ListItem button onClick={this.props.toggleDrawer("left", false)}>
						<ListItemText inset primary={<Link to="/" className={classes.link}>Home</Link>} />
					</ListItem>
					<ListItem button onClick={this.props.toggleDrawer("left", false)}>
						<ListItemText inset primary={<Link to="/players" className={classes.link}>Players</Link>} />
					</ListItem>
					<ListItem button onClick={this.props.toggleDrawer("left", false)}>
						<ListItemText inset primary={<Link to="/" className={classes.link}>Club</Link>} />
					</ListItem>
          <ListItem button onClick={this.props.toggleDrawer("left", false)}>
						<ListItemText inset primary={<Link to="/" className={classes.link}>Fans</Link>} />
					</ListItem>
          <ListItem button onClick={this.props.toggleDrawer("left", false)}>
						<ListItemText inset primary={<Link to="/about" className={classes.link}>About</Link>} />
					</ListItem>
          <ListItem button onClick={this.props.toggleDrawer("left", false)}>
						<ListItemText inset primary={<Link to="/login" className={classes.link}>Login</Link>} />
					</ListItem>
				</List>

				<Divider />

				<ListItem button onClick={this.props.handleCollapse}>
					<ListItemText inset primary="Inbox" />
					{this.props.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.props.open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested} onClick={this.props.toggleDrawer("left", false)}>
							<ListItemText inset primary="Starred" />
						</ListItem>
					</List>
				</Collapse>
        
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
