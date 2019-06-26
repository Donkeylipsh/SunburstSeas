import React, { Component } from "react";
import {NavLink,
		HashRouter
} from "react-router-dom";

class Banner extends Component{
	render(){
		return(
			<HashRouter>
				<div id="title-banner">
					<NavLink exact to="/"><h1>Sunburst Seas</h1></NavLink>
					<h4>Home of the <em>Colorado Sunburst</em> Anemone</h4>
				</div>
			</HashRouter>
		);
	}
}

export default Banner;