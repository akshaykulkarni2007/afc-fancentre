import Axios from "../components/HOC/Axios"

import {
	GET_PLAYERS,
	GET_TOP_PLAYERS,
	GET_ERRORS
} from "../actions/actionTypes"

// Get players
export const getPlayers = () => dispatch => {
	Axios.get("/api/players")
		.then(res =>
			dispatch({
				type: GET_PLAYERS,
				payload: {
					playerList: res.data.sort((a, b) => a.number - b.number)
				}
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}

export const getTopPlayers = () => dispatch => {
	Axios.get("/api/players/topStats")
		.then(res => {
			dispatch({
				type: GET_TOP_PLAYERS,
				payload: {
					topPlayers: res.data
				}
			})
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}
