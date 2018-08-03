import * as type from "../actions/actionTypes"

// Test
export const registerUser = userData => {
	return {
		type: type.TEST,
		payload: userData
	}
}
