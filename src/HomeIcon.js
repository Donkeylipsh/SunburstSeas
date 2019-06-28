import React, { Component } from "react";
import logo from "./img/Sun.png"
import {NavLink, HashRouter} from "react-router-dom";

class HomeIcon extends Component{
	render(){
		return(
		<HashRouter>
			<NavLink to="/">
				<img src={logo} id="home-logo" alt="Logo" />
				<h1 id="sunburst-title">Sunburst Seas</h1>
			</NavLink>
		</HashRouter>
		);
	}
}

export default HomeIcon;