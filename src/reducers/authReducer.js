import {
	SET_CURRENT_USER,
	REGISTRATION_SUCCESS,
	ACTIVE_TAB
} from "../actions/actionTypes"
import isEmpty from "../validation/isEmpty"

const initialState = {
	isAuthenticated: false,
	user: {},
	success: false,
	activeTab: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ACTIVE_TAB:
			return {
				...state,
				activeTab: action.payload
			}
		case REGISTRATION_SUCCESS:
			return {
				...state,
				success: action.payload.success,
				activeTab: 0
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
