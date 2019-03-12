const imagePath = path => {
	if (process.env.NODE_ENV === "production") {
		return `${process.env.STATIC}/${path}`
	} else {
		return `http://localhost:5000/${path}`
	}
}

export default imagePath
