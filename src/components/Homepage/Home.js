import React, { Component } from "react"

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
			title: "Lucas Torreira joins Arsenal!",
			content:
				"Lucas Torreira is an Arsenal player at last. He joined us from Sampdoria for £26 million. He become Unai Emery’s fourth signing of the summer transfer window."
		},
		fixtures: {
			previous: {
				opponent: "Atletico Madrid",
				tournament: "International Champions Cup",
				venue: "away/Singapore National Stadium",
				date: new Date(2018, 6, 26),
				scoreline: "1(3) - 1(1)"
			},
			next: {
				opponent: "PSG",
				tournament: "International Champions Cup",
				venue: "away/Singapore National Stadium",
				date: new Date(2018, 6, 28)
			}
		},
		playerStats: [
			{
				number: 14,
				name: "Pierre-Emerick Aubameyang",
				image: "Pierre-Emerick Aubameyang.jpg",
				statName: "Most Goals",
				statNumber: "10"
			},
			{
				number: 11,
				name: "Mesut Ozil",
				image: "Mesut Ozil.png",
				statName: "Most Assist",
				statNumber: "10"
			},
			{
				number: 6,
				name: "Laurent Koscielny",
				image: "Laurent Koscielny.png",
				statName: "Most Red Cards",
				statNumber: "1"
			},
			{
				number: 1,
				name: "Bernd Leno",
				image: "Bernd Leno.jpg",
				statName: "Most Clean Sheets",
				statNumber: "10"
			}
		]
	}

	render() {
		const { classes } = this.props

		const prevMatchVenueType = this.state.fixtures.previous.venue
				.split("/")[0]
				.toLowerCase(),
			nextMatchVenueType = this.state.fixtures.next.venue
				.split("/")[0]
				.toLowerCase()

		let gridItems = this.state.playerStats.map(player => (
			<div
				key={player.number}
				subHeader={`${player.statName} (${player.statNumber})`}
				image={player.image}
				title={`${player.number} ${player.name}`}
			/>
		))

		return (
			<div id="homepage">
				{/* News Banner */}
				<section id="home-banner">
					<Banner
						img={"images/" + this.state.banner.image}
						title={this.state.banner.title}
						height="650px"
						color="#fe000c">
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
								<h4>{this.state.fixtures.previous.date.toDateString()}</h4>
								<h2>
									{prevMatchVenueType === "home"
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
								<h4>{this.state.fixtures.next.date.toDateString()}</h4>
								<h2>
									{nextMatchVenueType === "home"
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
													1
												</TableCell>
												<TableCell>Bournmouth</TableCell>
												<TableCell>0</TableCell>
												<TableCell>0</TableCell>
											</TableRow>

											<TableRow className="arsenal">
												<TableCell component="td" scope="row">
													2
												</TableCell>
												<TableCell>Arsenal</TableCell>
												<TableCell>0</TableCell>
												<TableCell>0</TableCell>
											</TableRow>

											<TableRow>
												<TableCell component="td" scope="row">
													3
												</TableCell>
												<TableCell>Brighton</TableCell>
												<TableCell>0</TableCell>
												<TableCell>0</TableCell>
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
