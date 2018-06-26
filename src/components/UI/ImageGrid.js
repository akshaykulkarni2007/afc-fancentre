import React from "react";

// Material
import {
	withStyles,
	GridList,
	GridListTile,
	GridListTileBar,
	ListSubheader
} from "@material-ui/core";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper
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
});

function ImageGrid(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList cols={4} cellHeight={350} className={classes.gridList}>
				{props.content.map(item => (
					<GridListTile key={item.number}>
						<ListSubheader component="div" className="stat-type">
							<h2>{item.statName} ({item.statNumber})</h2>
						</ListSubheader>
						<img src={"images/" + item.image} alt={item.name} />
						<GridListTileBar
							title={
								<span className={classes.title}>
									{item.number} {item.name}
								</span>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

export default withStyles(styles)(ImageGrid);
