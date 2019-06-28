import React, { Component } from "react";
import logo from "./img/Sun.png"
import {NavLink,
HashRouter} from "react-router-dom";
		
class BrowseNav extends Component{
	render(){
		return(
			<HashRouter>
				<nav id="browse-nav">
					<NavLink to="/anemones">Anemones</NavLink>
					<NavLink to="/lps">LPS Corals</NavLink>
					<NavLink to="/sps">SPS Corals</NavLink>
					<NavLink to="/palys">Palys and Zoas</NavLink>
					<NavLink to="/soft">Soft Corals</NavLink>
				</nav>
			</HashRouter>
		);
	}
}		
		
export default BrowseNav;