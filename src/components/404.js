import React from "react"

import staticPath from "../config/staticPath"

const FourOFour = () => {
	return (
		<div className="not-found">
			<img src={`${staticPath}/404.svg`} alt="NOT FOUND" />
			<h1>
				Sorry, this page doesn't exist. Just like Champions League Trophy in our
				cabinet.
			</h1>
		</div>
	)
}

export default FourOFour
