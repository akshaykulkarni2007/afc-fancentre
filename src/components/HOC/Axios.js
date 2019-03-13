import axios from "axios"

let baseURL

process.env.NODE_ENV === "development"
	? (baseURL = "http://localhost:5000")
	: (baseURL = "https://afcfc-backend.herokuapp.com/")

export default axios.create({
	baseURL
})
