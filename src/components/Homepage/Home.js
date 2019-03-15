import React, { Component } from "react"
import imagePath from "../../config/staticPath"

// redux and actions
import { connect } from "react-redux"
import { getTopPlayers } from "../../actions/playerActions"

import Axios from "../HOC/Axios"

// Material
import {
	withStyles,
	Grid,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from "@material-ui/core"

// Custom Components
import Banner from "../UI/Banner"
import ImageGrid from "../UI/ImageGrid"
import StandingsTableRow from "../Club/Season/StandingsTableRow"

// CSS
import "./Home.css"

const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: 0,
		textAlign: "center"
	},
	paper: {
		padding: theme.spacing.unit * 2,
		height: "100%",
		color: theme.palette.text.secondary
	},
	tableParent: {
		width: "100%",
		overflowX: "auto"
	}
})

class Home extends Component {
	state = {
		banner: {
			image: "home-banner.jpg",
			title: "",
			content: ""
		},
		fixtures: {
			previous: {
				opponent: "Cardiff City",
				tournament: "Premier League",
				venue: "home/Emirates Stadium",
				date: new Date(2019, 0, 30),
				scoreline: "2 - 1"
			},
			next: {
				opponent: "Manchester City",
				tournament: "Premier League",
				venue: "away/Etihad Stadium",
				date: new Date(2019, 1, 3)
			}
		},
		standingsTable: [
			{ pos: 4, team: "Man United", matches: 29, GD: 20, points: 58 },
			{ pos: 5, team: "Arsenal", matches: 29, GD: 22, points: 57 },
			{ pos: 6, team: "Chelsea", matches: 29, GD: 19, points: 56 }
		]
	}

	dateFormat = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric"
	}

	getDate = date => date.toLocaleDateString("en-GB", this.dateFormat)

	prevMatchVenueType = this.state.fixtures.previous.venue
		.split("/")[0]
		.toLowerCase()

	nextMatchVenueType = this.state.fixtures.next.venue
		.split("/")[0]
		.toLowerCase()

	componentDidMount() {
		// get banner content
		Axios.get("/api/home-banner")
			.then(res =>
				this.setState((state, props) => ({
					banner: {
						...this.state.banner,
						title: res.data.title,
						content: res.data.content
					}
				}))
			)
			.catch(err => console.log(err))

		// get top player stats
		this.props.getTopPlayers()
	}

	render() {
		const { classes } = this.props

		// remove yellow card stat if red card stat exists
		// var index = this.state.playerStats.findIndex(function(o) {
		// 	return o.statName === "Most Yellow Cards"
		// })
		// if (index !== -1) this.state.playerStats.splice(index, 1)

		const statGridItems = this.props.players.topPlayers.map(player => ({
			key: player.number + player.statName,
			subHeader: `${player.statName} (${player.statNumber})`,
			image: player.dp,
			title: `${player.number} ${player.name}`
		}))

		const standingsTableRow = this.state.standingsTable.map(row => (
			<StandingsTableRow
				key={row.team}
				pos={row.pos}
				team={row.team}
				matches={row.matches}
				GD={row.GD}
				points={row.points}
			/>
		))

		return (
			<div id="homepage" style={{ marginTop: "-3rem" }}>
				{/* News Banner */}
				<section id="home-banner">
					<Banner
						img={imagePath(`images/${this.state.banner.image}`)}
						title={this.state.banner.title}
						height="650px"
						color="#fff"
						imgPosition="">
						{this.state.banner.content}
					</Banner>
				</section>

				{/* Fixtures */}
				<section id="home-fixtures">
					<Typography variant="display2" className="section-title">
						Fixtures
					</Typography>
					<div className={classes.root}>
						<Grid container spacing={0}>
							<Grid item xs={12} md={4} className="fixtures-box black-box">
								<h2>Previous Match</h2>
								<h4>{this.getDate(this.state.fixtures.previous.date)}</h4>
								<h2>
									{this.prevMatchVenueType === "home"
										? `Arsenal ${this.state.fixtures.previous.scoreline} ${
												this.state.fixtures.previous.opponent
										  }`
										: `${this.state.fixtures.previous.opponent} ${
												this.state.fixtures.previous.scoreline
										  } Arsenal`}
								</h2>
								<h5>
									{this.state.fixtures.previous.tournament} /{" "}
									{this.state.fixtures.previous.venue.split("/")[1]}
								</h5>
								<a href="#!" className="fixtures-link">
									Analysis and Reactions
								</a>
							</Grid>
							<Grid item xs={12} md={4} className="fixtures-box red-box">
								<h2>Next Match</h2>
								<h4>{this.getDate(this.state.fixtures.next.date)}</h4>
								<h2>
									{this.nextMatchVenueType === "home"
										? `Arsenal vs ${this.state.fixtures.next.opponent}`
										: `${this.state.fixtures.next.opponent} vs Arsenal`}
								</h2>
								<h5>
									{this.state.fixtures.next.tournament} /{" "}
									{this.state.fixtures.next.venue.split("/")[1]}
								</h5>
								<a href="#!" className="fixtures-link ">
									Fixtures
								</a>
							</Grid>
							<Grid item xs={12} md={4} className="fixtures-box white-box">
								<h2>Table</h2>
								<div className={classes.tableParent}>
									<Table className={classes.table} style={{ maxWidth: `100%` }}>
										<TableHead>
											<TableRow>
												<TableCell>#</TableCell>
												<TableCell>Team</TableCell>
												<TableCell className="hidden-small">Matches</TableCell>
												<TableCell className="hidden-small">+/-</TableCell>
												<TableCell>Points</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>{standingsTableRow}</TableBody>
									</Table>
								</div>
								<a href="#!" className="fixtures-link">
									View Full Table
								</a>
							</Grid>
						</Grid>
					</div>
				</section>

				{/* Stats */}
				<section id="home-stats">
					<Typography variant="display2" className="section-title">
						Season So Far
					</Typography>

					<ImageGrid content={statGridItems} cols={5} />
				</section>

				{/* Social */}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	players: state.players,
	errors: state.errors
})

export default connect(
	mapStateToProps,
	{ getTopPlayers }
)(withStyles(styles)(Home))
