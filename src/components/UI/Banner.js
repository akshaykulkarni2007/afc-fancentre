import React from "react"

const Banner = ({ img, height, title, children, imgPosition, color }) => {
	const styles = {
		backgroundImg: {
			backgroundImage: `url(${img})`,
			height: height,
			width: 100 + "%",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: imgPosition
		},
		title: {
			margin: 0,
			padding: "5rem 2rem 2rem",
			maxWidth: "500px",
			color: color
		},
		content: {
			margin: 0,
			padding: "0 2rem 2rem",
			maxWidth: "500px",
			color: color
		}
	}

	return (
		<div className="banner-background" style={styles.backgroundImg}>
			<h1 style={styles.title}>{title}</h1>
			<h4 style={styles.content}>{children}</h4>
		</div>
	)
}

export default Banner
