// const imagePath = path => {
// 	if (process.env.NODE_ENV === "production") {
// 		return `https://afcfc-backend.herokuapp.com/${path}`
// 	} else {
// 		return `http://localhost:5000/${path}`
// 	}
// }

let staticPath

process.env.NODE_ENV === "production"
	? (staticPath = "https://afcfc-backend.herokuapp.com/images")
	: (staticPath = "http://localhost:5000/images")

export default staticPath
