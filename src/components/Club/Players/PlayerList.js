import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import ImageGrid from "../../UI/ImageGrid"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getPlayers } from "../../../actions/playerActions"

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
		players1: []
	}

	componentDidMount() {
		this.props.getPlayers()
	}

	render() {
		const { classes } = this.props

		const gk = [],
			def = [],
			mid = [],
			fw = []

		this.props.players.players.forEach(player => {
			const item = (
				<div
					key={player.number}
					image={player.dp}
					title={`${player.number} ${player.name}`}
				/>
			)

			const position = player.position.split("/")[0].trim()
			if (position === "GK") {
				gk.push(item)
			} else if (position === "DEF") {
				def.push(item)
			} else if (position === "MID") {
				mid.push(item)
			} else if (position === "FW") {
				fw.push(item)
			}
		})

		return (
			<div id="player-list">
				<Grid container justify="center" className="container">
					<Grid
						container
						spacing={8}
						className={classes.demo}
						alignItems="center">
						<Grid item xs={12}>
							<Typography variant="display2" style={{ color: "#000" }}>
								Players
							</Typography>
						</Grid>

						<Grid item xs={12}>
							<Typography
								variant="display1"
								style={{ color: "#000", marginTop: "3rem" }}>
								Goalkeepers
							</Typography>
						</Grid>
						<ImageGrid content={gk} />

						<Grid item xs={12}>
							<Typography
								variant="display1"
								style={{ color: "#000", marginTop: "3rem" }}>
								Defenders
							</Typography>
						</Grid>
						<ImageGrid content={def} />

						<Grid item xs={12}>
							<Typography
								variant="display1"
								style={{ color: "#000", marginTop: "3rem" }}>
								Midfielders
							</Typography>
						</Grid>
						<ImageGrid content={mid} />

						<Grid item xs={12}>
							<Typography
								variant="display1"
								style={{ color: "#000", marginTop: "3rem" }}>
								Forwards
							</Typography>
						</Grid>
						<ImageGrid content={fw} />
					</Grid>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	players: state.players,
	errors: state.errors
})

// const mapDispatchToProps = dispatch => {
// 	return { actions: bindActionCreators(GET_PLAYERS, dispatch) }
// }

export default connect(
	mapStateToProps,
	{ getPlayers }
)(withRouter(withStyles(styles)(PlayerList)))
