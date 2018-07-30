import axios from "axios"

let baseURL

if (process.env.NODE_ENV === "development") {
	baseURL = "http://localhost:5000"
} else {
	baseURL = "https://afcfc-backend.herokuapp.com/"
}

export default axios.create({
	baseURL: baseURL
})
