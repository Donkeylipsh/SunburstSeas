import React, { Component } from "react";
import Browse from "./Browse";

class Crabs extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Invertebrates</h2>
					<h3>Crabs</h3>
					<p>The unsung heroes of the hobby</p>
					<p>Expand your biodiversity to imporve your tank's health</p>
					<Browse category="Crabs" />
				</div>
			</div>
		);
	}
}

export default Crabs;