import { combineReducers } from "redux"

// Reducers
import authReducer from "./authReducer"
import playerReducer from "./playerReducer"
import errorReducer from "./errorReducer"

export default combineReducers({
	auth: authReducer,
	players: playerReducer,
	errors: errorReducer
})
