import React, { Component } from "react";
import {
	Route,
	HashRouter
} from "react-router-dom";
import NavBars from "./NavBars";
import Footer from "./Footer";

import Home from "./Home";
import Browse from "./Browse";
import Details from "./Details";

class Main extends Component{
	render(){
		return(
			<HashRouter>
				<NavBars />
				<div id="content">
					<Route exact path="/" component={Home} />
					<Route exact path="/anemones" render={(routeProps) => (
						<Browse {...routeProps} page="Anemone" />
					)} />
					<Route exact path="/lps" render={(routeProps) => (
						<Browse {...routeProps} page="LPS Coral" />
					)} />
					<Route exact path="/sps" render={(routeProps) => (
						<Browse {...routeProps} page="SPS Coral" />
					)} />
					<Route exact path="/palys" render={(routeProps) => (
						<Browse {...routeProps} page="Palys and Zoa" />
					)} />
					<Route exact path="/soft" render={(routeProps) => (
						<Browse {...routeProps} page="Soft Coral" />
					)} />
					<Route path="/details" component={Details}/>
					)} />
				</div>
				<Footer />
			</HashRouter>
		);
	}
}

export default Main;