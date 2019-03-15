import React, { Component } from "react"
import imagePath from "../../config/staticPath"

import "react-responsive-carousel/lib/styles/carousel.min.css"

// custom components
import { Carousel } from "react-responsive-carousel"

class DemoCarousel extends Component {
	items = this.props.images.map(item => (
		<div key={Math.random()}>
			<img src={imagePath(`images/${item}`)} alt={item} />
			{/* <p className="legend">Legend 1</p> */}
		</div>
	))

	render() {
		return <Carousel {...this.props.config}>{this.items}</Carousel>
	}
}

export default DemoCarousel
