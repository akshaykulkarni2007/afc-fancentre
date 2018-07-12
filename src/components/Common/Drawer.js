import React from "react"
import PropTypes from "prop-types"

// Material
import {
	withStyles,
	Drawer,
	Button,
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
	}
}

class TemporaryDrawer extends React.Component {
	state = {
		left: false,
		open: true
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		})
	}

	handleClick = () => {
		this.setState(state => ({ open: !state.open }))
	}

	render() {
		const { classes } = this.props

		const sideList = (
			<div className={classes.list}>
				<List component="nav">
					<ListItem button>
						<ListItemText inset primary="Sent mail" />
					</ListItem>
					<ListItem button>
						<ListItemText inset primary="Sent mail" />
					</ListItem>
					<ListItem button>
						<ListItemText inset primary="Sent mail" />
					</ListItem>
				</List>

				<Divider />

				<ListItem button onClick={this.handleClick}>
					<ListItemText inset primary="Inbox" />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemText inset primary="Starred" />
						</ListItem>
					</List>
				</Collapse>
			</div>
		)

		return (
			<div>
				<Button onClick={this.toggleDrawer("left", true)}>Open Left</Button>
				<Drawer
					open={this.state.left}
					onClose={this.toggleDrawer("left", false)}>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer("left", false)}
						onKeyDown={this.toggleDrawer("left", false)}>
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
