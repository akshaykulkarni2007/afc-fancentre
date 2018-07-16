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
					<Grid item xs={12}>
						<p>&copy; 2018 Arsenal FC Fan Center</p>
					</Grid>
				</Grid>
			</div>
		</footer>
	)
}

export default withStyles(styles)(Footer)
