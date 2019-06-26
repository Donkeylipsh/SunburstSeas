import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import Home from "./Home";
import Anemones from "./Anemones";
import Corals from "./Corals";
import Fish from "./Fish";
import Invertebrates from "./Invertebrates";
import Cart from "./Cart";
import Details from "./Details";
import Bubbletip from "./Bubbletip";
import Flower from "./Flower";
import Euphylia from "./Euphylia";
import Acropora from "./Acropora";
import Acans from "./Acans";
import Favia from "./Favia";
import Blennies from "./Blennies";
import Gobies from "./Gobies";
import Jawfish from "./Jawfish";
import Crabs from "./Crabs";
import Snails from "./Snails";
import Shrimp from "./Shrimp";
import Banner from "./Banner";

class Main extends Component{
	render(){
		return(
			<HashRouter>
				<div>
					<ul id="nav-bar">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/anemones">Anemones</NavLink></li>
						<li><NavLink to="/corals">Corals</NavLink></li>
						<li><NavLink to="/fish">Fish</NavLink></li>
						<li><NavLink to="/invertebrates">Invertebrates</NavLink></li>
						<li><NavLink to="/cart">Cart</NavLink></li>
					</ul>
					<div className="page-container">
						<Banner />
					</div>
					<div id="content">
						<Route exact path="/" component={Home} />
						<Route exact path="/anemones" component={Anemones} />
						<Route exact path="/corals" component={Corals} />
						<Route exact path="/fish" component={Fish} />
						<Route exact path="/invertebrates" component={Invertebrates} />
						<Route path="/cart" component={Cart} />
						<Route path="/details" component={Details} />
						<Route path="/anemones/bubbletip" component={Bubbletip} />
						<Route path="/anemones/flower" component={Flower} />
						<Route path="/corals/euphylia" component={Euphylia} />
						<Route path="/corals/acropora" component={Acropora} />
						<Route path="/corals/favia" component={Favia} />
						<Route path="/corals/acans" component={Acans} />
						<Route path="/fish/blennies" component={Blennies} />
						<Route path="/fish/gobies" component={Gobies} />
						<Route path="/fish/jawfish" component={Jawfish} />
						<Route path="/invertebrates/crabs" component={Crabs} />
						<Route path="/invertebrates/snails" component={Snails} />
						<Route path="/invertebrates/shrimp" component={Shrimp} />
					</div>
					<div id="footer"></div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;