import React, { Component } from "react"

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Redux
import { Provider } from "react-redux"
import store from "../store"

// Authentication
import jwt_decode from "jwt-decode"
import setAuthToken from "../utils/setAuthToken"
import { setCurrentUser, logoutUser } from "../actions/authActions"

// CSS
import "./App.css"

// Components
import { Navigation, Footer } from "./Common"
import {
	Gallery,
	History,
	PlayerList,
	PlayerDetails,
	Records,
	Season
} from "./Club"
import { Feed, Media, Messages, Polls } from "./Fans"
import Home from "./Homepage/Home"
import Auth from "./Auth/Auth"
import About from "./About/About"
import FourOFour from "./404"

// Check for Authentication
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken)
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken)
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded))

	// Check for expired token
	const currentTime = Date.now() / 1000
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser())
		// Redirect to login
		window.location.href = "/auth"
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router basename="/">
					<div className="app">
						<Navigation />
						<main>
							<Switch>
								<Route exact path="/" component={Home} />

								<Route exact path="/club/players" component={PlayerList} />
								<Route exact path="/club/gallery" component={Gallery} />
								<Route exact path="/club/history" component={History} />
								<Route exact path="/club/records" component={Records} />
								<Route exact path="/club/season" component={Season} />

								<Route exact path="/fans/feed" component={Feed} />
								<Route exact path="/fans/media" component={Media} />
								<Route exact path="/fans/messages" component={Messages} />
								<Route exact path="/fans/polls" component={Polls} />

								<Route exact path="/about" component={About} />
								<Route exact path="/auth" component={Auth} />
								<Route component={FourOFour} />
							</Switch>
						</main>
						<Footer />
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
