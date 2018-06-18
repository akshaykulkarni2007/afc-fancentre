import React, { Component } from 'react';

import Banner from '../UI/Banner';

class Home extends Component {

    state = {
        bannerImage: "home-banner.jpg",
        bannerTitle: "Stephan Lichtsteiner Is A Gunner!",
        bannerContent: "Swiss international defender Stephan Lichtsteiner is joining us from Juventus.He signs as a free agent from the Serie A club, where he won the title in each of his seven seasons."
    }
    render() {
        return(
            <div>
                {/* News Banner */}
                <Banner 
                    img={"images/" + this.state.bannerImage} 
                    title={this.state.bannerTitle}
                    height="450px">
                    {this.state.bannerContent}
                </Banner>

                {/* Fixtures */}

                {/* Stats */}

                {/* Social */}
            </div>
        )
    }
}

export default Home;