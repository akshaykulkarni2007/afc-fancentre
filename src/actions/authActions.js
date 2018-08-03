import * as type from "../actions/actionTypes"

// Test
export const test = userData => {
	return {
		type: type.TEST,
		payload: userData
	}
}
