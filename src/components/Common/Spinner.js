import React from "react"
import spinner from "./spinner.png"

export default () => {
	return (
		<div className="spinner-container">
			<img className="spinner" src={spinner} alt="Loading..." />
		</div>
	)
}
