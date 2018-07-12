import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// CSS
import "./App.css"

// Components
import Navigation from "./Common/Navigation"
import Footer from "./Common/Footer"
import Home from "./Homepage/Home"
import Login from "./Auth/Login"
import PlayerList from "./Players/PlayerList"
import About from "./About/About"

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Navigation />
					<Route exact path="/" component={Home} />
					<Route exact path="/players" component={PlayerList} />
					<Route exact path="/about" component={About} />
					<Route exact path="/login" component={Login} />
					<Footer />
				</div>
			</Router>
		)
	}
}

export default App
