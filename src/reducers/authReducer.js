import { SET_CURRENT_USER, REGISTRATION_SUCCESS } from "../actions/actionTypes"
import isEmpty from "../validation/isEmpty"

const initialState = {
	isAuthenticated: false,
	user: {},
	success: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case REGISTRATION_SUCCESS:
			return {
				...state,
				success: action.payload
			}
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
		default:
			return state
	}
}
