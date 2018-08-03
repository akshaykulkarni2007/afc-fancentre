import * as type from "../actions/actionTypes"

const initialState = {
	isAuthenticated: false,
	user: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case type.TEST:
			return {
				...state,
				user: action.payload
			}
		default:
			return state
	}
}
