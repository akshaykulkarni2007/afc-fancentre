const imagePath = path => {
	if (process.env.NODE_ENV === "production") {
		return `https://afcfc-backend.herokuapp.com/${path}`
	} else {
		return `http://localhost:5000/${path}`
	}
}

export default imagePath
