import React, { Component } from "react"

import ImageGrid from "../../UI/ImageGrid"
import Axios from "../../HOC/Axios"

// Material
import { withStyles, Grid, Typography } from "@material-ui/core"

const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: 0
	},
	demo: {
		[theme.breakpoints.up("lg")]: {
			width: 1170
		}
	}
})

class PlayerList extends Component {
	state = {
		players: []
	}

	componentDidMount() {
		Axios.get("/api/players")
			.then(res => {
				const players = res.data
				this.setState({ players })
			})
			.catch(err => console.log(err))
	}

	render() {
		const { classes } = this.props

		const gridItems = this.state.players.map(player => (
			<div
				key={player.number}
				image={player.dp}
				title={`${player.number} ${player.name}`}
			/>
		))

		return (
			<div id="player-list">
				<Grid container justify="center">
					<Grid
						container
						spacing={8}
						className={classes.demo}
						alignItems="center">
						<Grid item xs={3}>
							<Typography variant="display2" style={{ color: "#000" }}>
								Players
							</Typography>
						</Grid>
						<ImageGrid content={gridItems} />
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(PlayerList)
