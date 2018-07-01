import React from "react"
import PropTypes from "prop-types"

// Material
import {
	withStyles,
	AppBar,
	Hidden,
	Toolbar,
	Typography,
	Button,
	IconButton
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const styles = {
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

const Navigation = props => {
	const { classes } = props

	return (
		<div className={classes.root}>
			<AppBar position="static" style={styles.background}>
				<Toolbar>
					<Hidden lgUp>
						<IconButton
							className={classes.menuButton}
							color="inherit"
							aria-label="Menu">
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Typography variant="title" color="inherit" className={classes.flex}>
						Arsenal Fan Centre
					</Typography>
					<Hidden mdDown>
						<Button color="inherit">Home</Button>
						<Button color="inherit">Players</Button>
						<Button color="inherit">Club</Button>
						<Button color="inherit">Fans</Button>
						<Button color="inherit">About</Button>
						<Button color="inherit">Login</Button>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	)
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigation)
