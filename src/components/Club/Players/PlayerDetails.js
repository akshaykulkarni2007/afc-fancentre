import React, { Component } from "react"
import staticPath from "../../../config/staticPath"

// Material
import {
	withStyles,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableRow
} from "@material-ui/core"

// custom components
import ImageCarousel from "../../UI/Carousel"
import Axios from "../../HOC/Axios"

const styles = theme => ({
	demo: {
		[theme.breakpoints.up("lg")]: {
			width: 1170
		}
	},
	image: {
		width: "100%"
	}
})
class PlayerDetails extends Component {
	state = {
		player: {}
	}

	componentDidMount() {
		Axios.get(`/api/players/${this.props.match.params.name}`)
			.then(res => this.setState((state, props) => ({ player: res.data[0] })))
			.catch(err => console.log(err))
	}

	render() {
		const { classes } = this.props

		const galleryCarousel = this.state.player.gallery ? (
			<ImageCarousel
				config={{
					width: "50%",
					height: "100px",
					showThumbs: false,
					showStatus: false,
					showIndicators: false,
					infiniteLoop: true
				}}
				images={this.state.player.gallery}
			/>
		) : null

		return (
			<div id="player-details">
				<Grid container justify="center" className="container">
					<Grid
						container
						spacing={8}
						alignItems="center"
						className={classes.demo}>
						<Grid item xs={12}>
							<h1>{this.state.player.name}</h1>
						</Grid>

						<Grid item xs={12} lg={8}>
							{this.state.player.dp && (
								<img
									src={`${staticPath}/${this.state.player.dp}.jpg`}
									alt={this.state.player.name}
									className={classes.image}
								/>
							)}
						</Grid>
						<Grid item xs={12} lg={4}>
							<Table style={{ maxWidth: `100%` }}>
								<TableBody>
									<TableRow>
										<TableCell>
											<strong>Number:</strong>
										</TableCell>
										<TableCell>{this.state.player.number}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>Position:</strong>
										</TableCell>
										<TableCell>{this.state.player.position}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>Joined:</strong>
										</TableCell>
										<TableCell>{this.state.player.joined}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>From:</strong>
										</TableCell>
										<TableCell>{this.state.player.from}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<strong>Nationality:</strong>
										</TableCell>
										<TableCell>{this.state.player.nationality}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Grid>

						<div
							dangerouslySetInnerHTML={{
								__html: this.state.player.description
							}}
						/>
						{galleryCarousel}
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(PlayerDetails)
