import React from "react"

// Material
import {
	withStyles,
	GridList,
	GridListTile,
	GridListTileBar,
	ListSubheader
} from "@material-ui/core"

const styles = theme => ({
	gridListParent: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
		textAlign: "center"
	},
	gridList: {
		margin: 0
	},
	title: {
		fontSize: 25
	},
	subheader: {
		width: "100%"
	}
})

const ImageGrid = props => {
	const { classes } = props

	let cols = 1
	if (window.innerWidth < 960 && window.innerWidth > 600) {
		cols = 2
	} else if (window.innerWidth < 600) {
		cols = 4
	}

	return (
		<div className={classes.gridListParent}>
			<GridList cols={4} cellHeight={350} className={classes.gridList}>
				{props.content.map(item => (
					<GridListTile cols={cols} key={item.key}>
						<ListSubheader component="div" className="stat-type">
							<h2>{item.props.subHeader}</h2>
						</ListSubheader>
						<img
							src={"/images/" + item.props.image + ".jpg"}
							alt={item.props.name}
						/>
						<GridListTileBar
							title={<span className={classes.title}>{item.props.title}</span>}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	)
}

export default withStyles(styles)(ImageGrid)
