import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// CSS
import "./App.css"

// Components
import { Navigation, Footer } from "./Common"
import { Gallery, History, Records, Season } from "./Club"
import { Feed, Media, Messages, Polls } from "./Fans"
import Home from "./Homepage/Home"
import Login from "./Auth/Login"
import PlayerList from "./Players/PlayerList"
import About from "./About/About"
import FourOFour from "./404"

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Navigation />
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/players" component={PlayerList} />

							<Route exact path="/club/gallery" component={Gallery} />
							<Route exact path="/club/history" component={History} />
							<Route exact path="/club/records" component={Records} />
							<Route exact path="/club/season" component={Season} />

							<Route exact path="/fans/feed" component={Feed} />
							<Route exact path="/fans/media" component={Media} />
							<Route exact path="/fans/messages" component={Messages} />
							<Route exact path="/fans/polls" component={Polls} />

							<Route exact path="/about" component={About} />
							<Route exact path="/login" component={Login} />
							<Route component={FourOFour} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		)
	}
}

export default App
