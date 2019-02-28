import React, { Component } from "react"

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
			title: "Up Next: Manchester City",
			content:
				"Team prepares ahead of tough fixture away at Etihad. New signing Dennis Suarez may make Arsenal debut."
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
		playerStats: []
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
		Axios.get("/api/players/topStats")
			.then(res => {
				const playerStats = res.data
				this.setState({ playerStats })
			})
			.catch(err => console.log(err))
	}

	render() {
		const { classes } = this.props

		let gridItems = this.state.playerStats.map(player => (
			<div
				key={player.number + player.statName}
				subHeader={`${player.statName} (${player.statNumber})`}
				image={player.name.replace(/\s+/g, "-").toLowerCase()}
				title={`${player.number} ${player.name}`}
			/>
		))

		return (
			<div id="homepage" style={{ marginTop: "-3rem" }}>
				{/* News Banner */}
				<section id="home-banner">
					<Banner
						img={"images/" + this.state.banner.image}
						title={this.state.banner.title}
						height="650px"
						color="#fff"
						imgPosition="0 -250px">
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
									<Table
										className={classes.table}
										style={{ maxWidth: 100 + "%" }}>
										<TableHead>
											<TableRow>
												<TableCell>#</TableCell>
												<TableCell>Team</TableCell>
												<TableCell>+/-</TableCell>
												<TableCell>Points</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell component="td" scope="row">
													3
												</TableCell>
												<TableCell>Spurs</TableCell>
												<TableCell>26</TableCell>
												<TableCell>54</TableCell>
											</TableRow>

											<TableRow className="arsenal">
												<TableCell component="td" scope="row">
													4
												</TableCell>
												<TableCell>Arsenal</TableCell>
												<TableCell>17</TableCell>
												<TableCell>47</TableCell>
											</TableRow>

											<TableRow>
												<TableCell component="td" scope="row">
													5
												</TableCell>
												<TableCell>Chelsea</TableCell>
												<TableCell>17</TableCell>
												<TableCell>47</TableCell>
											</TableRow>
										</TableBody>
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

					<ImageGrid content={gridItems} />
				</section>

				{/* Social */}

				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		)
	}
}

export default withStyles(styles)(Home)
