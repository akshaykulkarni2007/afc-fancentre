import { GET_PLAYERS, GET_TOP_PLAYERS } from "../actions/actionTypes"

const initialState = {
	playerList: [],
	topPlayers: []
	//loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PLAYERS:
			return {
				...state,
				playerList: action.payload.playerList
			}

		case GET_TOP_PLAYERS:
			return {
				...state,
				topPlayers: action.payload.topPlayers
			}

		default:
			return state
	}
}
