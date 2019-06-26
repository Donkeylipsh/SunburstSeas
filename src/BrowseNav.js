import React, { Component } from "react";
import {NavLink,
		HashRouter
} from "react-router-dom";

class BrowseNav extends Component{
	render(){
		function buildSections(category){
			var navSections = [];
			
			console.log("Browse Nav: In buildSections");
			
			// Key attribute intentionally ommitted as all link go to the same page for demonstration purposes
			if(category === "Anemones" || 
				category === "Bubbletip" || 
				category === "Flower"){
				navSections.push(<NavLink to="/anemones/bubbletip"><div>Bubble Tip</div></NavLink>);
				navSections.push(<NavLink to="/anemones/flower"><div>Flower</div></NavLink>);
			}
			else if(category === "Corals" ||
					category === "Euphylia" ||
					category === "Acropora" ||
					category === "Acans" ||
					category === "Favia" ){
				navSections.push(<NavLink to="/corals/euphylia"><div>Euphylia</div></NavLink>);
				navSections.push(<NavLink to="/corals/acropora"><div>Acropora</div></NavLink>);
				navSections.push(<NavLink to="/corals/acans"><div>Acans</div></NavLink>);
				navSections.push(<NavLink to="/corals/favia"><div>Favia</div></NavLink>);
			}
			else if(category === "Fish" ||
					category === "Blennies" ||
					category === "Gobies" ||
					category === "Jawfish"){
				navSections.push(<NavLink to="/fish/blennies"><div>Blennies</div></NavLink>);
				navSections.push(<NavLink to="/fish/gobies"><div>Gobies</div></NavLink>);
				navSections.push(<NavLink to="/fish/jawfish"><div>Jawfish</div></NavLink>);			
			}else if(category === "Invertebrates" ||
					category === "Crabs" ||
					category === "Snails" ||
					category === "Shrimp" ){
				navSections.push(<NavLink to="/invertebrates/crabs"><div>Crabs</div></NavLink>);
				navSections.push(<NavLink to="/invertebrates/snails"><div>Snails</div></NavLink>);
				navSections.push(<NavLink to="/invertebrates/shrimp"><div>Shrimp</div></NavLink>);
			}
			else{
				/* Do nothing */
				console.log("Browse Nav: Doing nothing");
			}
			
			return (
				<div>
					{navSections}
				</div>
			);
			
		}
		
		console.log("Browse Nav: " + this.props.current);
		
		var navCategories = buildSections(this.props.current);
		return(
			<HashRouter>
				<div id="browse-nav">
					{navCategories}
				</div>
			</HashRouter>
		);
	}
}

export default BrowseNav;