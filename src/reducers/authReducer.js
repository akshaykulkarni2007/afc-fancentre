import {
	SET_CURRENT_USER,
	REGISTRATION_SUCCESS,
	ACTIVE_TAB,
	AUTH_LOADING
} from "../actions/actionTypes"
import isEmpty from "../validation/isEmpty"

const initialState = {
	isAuthenticated: false,
	user: {},
	success: false,
	activeTab: 0,
	loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case REGISTRATION_SUCCESS:
			return {
				...state,
				success: action.payload.success,
				activeTab: 0,
				loading: false
			}
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
				loading: false
			}
		case ACTIVE_TAB:
			return {
				...state,
				activeTab: action.payload
			}
		case AUTH_LOADING:
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}
