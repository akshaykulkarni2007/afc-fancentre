import React from "react"

// Material
// Material
import { TableCell, TableRow } from "@material-ui/core"

const StandingsTableRow = ({ pos, team, matches, GD, points }) => (
	<TableRow className={team === "Arsenal" ? "arsenal" : ""}>
		<TableCell>{pos}</TableCell>
		<TableCell>{team}</TableCell>
		<TableCell className="hidden-small">{matches}</TableCell>
		<TableCell className="hidden-small">{GD}</TableCell>
		<TableCell>{points}</TableCell>
	</TableRow>
)

export default StandingsTableRow
