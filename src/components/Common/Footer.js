import React from "react"

// Material
import { withStyles, Grid } from "@material-ui/core"

const styles = {
	root: {
		flexGrow: 1,
		margin: 0,
		background: "#fe000c",
		color: "white"
	}
}

const Footer = props => {
	const { classes } = props

	return (
		<footer>
			<div className={classes.root}>
				<Grid container spacing={0}>
					<Grid item xs={6}>
						<p>&copy; 2018 Arsenal FC Fan Center</p>
					</Grid>
					<Grid item xs={6}>
						<p align="right">Image courtsey: arsenal.com</p>
					</Grid>
				</Grid>
			</div>
		</footer>
	)
}

export default withStyles(styles)(Footer)
