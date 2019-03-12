import React from "react"
import imagePath from "../../config/staticPath"

// router
import { Link } from "react-router-dom"

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
		// "flex-wrap": "nowrap"
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
	let itemWidth = props.cols || 4
	if (window.innerWidth < 960 && window.innerWidth > 600) {
		cols = 2
		itemWidth = 4
	} else if (window.innerWidth < 600) {
		cols = 4
		itemWidth = 4
	}

	// if (props.content.length == 1) itemWidth = 2
	// } else if ( props.content.length == 2) {
	// 	itemWidth = 4
	// }

	return (
		<div className={classes.gridListParent}>
			<GridList cols={itemWidth} cellHeight={350} className={classes.gridList}>
				{props.content.map(item => (
					<GridListTile cols={cols} key={item.key}>
						<ListSubheader component="div" className="stat-type">
							<h2>{item.subHeader}</h2>
						</ListSubheader>
						<img
							src={imagePath("images/" + item.image + ".jpg")}
							alt={item.name}
						/>
						<Link to={`/club/player/${item.image}`}>
							<GridListTileBar
								title={<span className={classes.title}>{item.title}</span>}
							/>
						</Link>
					</GridListTile>
				))}
			</GridList>
		</div>
	)
}

export default withStyles(styles)(ImageGrid)
