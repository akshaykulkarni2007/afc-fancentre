import { GET_PLAYERS } from "../actions/actionTypes"

const initialState = {
	players: []
	//loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PLAYERS:
			return {
				...state,
				players: action.payload.players
			}

		default:
			return state
	}
}
