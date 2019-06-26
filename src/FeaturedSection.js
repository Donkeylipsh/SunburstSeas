import React, { Component } from "react";
import {NavLink,
		HashRouter
} from "react-router-dom";
import FeaturedCard from "./FeaturedCard";

class FeaturedSection extends Component{
	render(){
		return(
			<HashRouter>
				<div className="center-contents">
					<h3>{this.props.section}</h3>
					<NavLink to="/details"><FeaturedCard name="Anemone" /></NavLink>
					<NavLink to="/details"><FeaturedCard name="Torch" /></NavLink>
					<NavLink to="/details"><FeaturedCard name="Hammer" /></NavLink>
					<NavLink to="/details"><FeaturedCard name="Acropora"/></NavLink>
					<NavLink to="/details"><FeaturedCard name="Favia"/></NavLink>
					<NavLink to="/details"><FeaturedCard name="Acan" /></NavLink>
				</div>
			</HashRouter>
		);
	}
}

export default FeaturedSection;