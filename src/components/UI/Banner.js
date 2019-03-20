import React from "react"
import { Link } from "react-router-dom"

// material
import Button from "@material-ui/core/Button"

const Banner = ({
	img,
	height,
	title,
	children,
	imgPosition,
	color,
	btn,
	btnText,
	btnLink
}) => {
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
		},
		button: {
			marginLeft: "2rem"
		}
	}

	return (
		<div className="banner-background" style={styles.backgroundImg}>
			<h1 style={styles.title}>{title}</h1>
			<h4 style={styles.content}>{children}</h4>
			{btn ? (
				<Button
					variant="outlined"
					color="primary"
					size="large"
					component={Link}
					to={btnLink}
					className="btn btn-primary"
					style={styles.button}>
					{btnText}
				</Button>
			) : (
				""
			)}
		</div>
	)
}

export default Banner
