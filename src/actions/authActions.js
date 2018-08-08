import jwt_decode from "jwt-decode"

import Axios from "../components/HOC/Axios"
import setAuthToken from "../utils/setAuthToken"

import {
	GET_ERRORS,
	SET_CURRENT_USER,
	REGISTRATION_SUCCESS,
	ACTIVE_TAB
} from "../actions/actionTypes"

// Register
export const registerUser = (userData, history) => dispatch => {
	Axios.post("/api/users/register", userData)
		.then(res =>
			dispatch({
				type: REGISTRATION_SUCCESS,
				payload: {
					success: true,
					activeTab: 0
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

// Login
export const loginUser = (userData, history) => dispatch => {
	Axios.post("/api/users/login", userData)
		.then(res => {
			// Save to localStorage
			const { token } = res.data
			// Set token to ls
			localStorage.setItem("jwtToken", token)
			// Set token to Auth header
			setAuthToken(token)
			// Decode token to get user data
			const decoded = jwt_decode(token)
			// Set current user
			dispatch(setCurrentUser(decoded))
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}

// Set user session
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}
}

// Set Active Tab
export const setActiveTab = id => dispatch => {
	dispatch({
		type: ACTIVE_TAB,
		payload: id
	})
}

// Logout
export const logoutUser = history => dispatch => {
	// Remove token from localStorage
	localStorage.removeItem("jwtToken")
	// Remove auth header for future requests
	setAuthToken(false)
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}))
	history.push("/")
}
