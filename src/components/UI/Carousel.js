import React, { Component } from "react"
import staticPath from "../../config/staticPath"

import "react-responsive-carousel/lib/styles/carousel.min.css"

// custom components
import { Carousel } from "react-responsive-carousel"

class ImageCarousel extends Component {
	items = this.props.images.map(item => (
		<div key={Math.random()}>
			<img src={`${staticPath}/${item}`} alt={item} />
			{/* <p className="legend">Legend 1</p> */}
		</div>
	))

	render() {
		return <Carousel {...this.props.config}>{this.items}</Carousel>
	}
}

export default ImageCarousel
