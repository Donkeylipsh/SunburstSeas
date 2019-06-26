import React, { Component } from "react";
import Browse from "./Browse";

class Snails extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Invertebrates</h2>
					<h3>Snails</h3>
					<p>The unsung heroes of the hobby</p>
					<p>Expand your biodiversity to imporve your tank's health</p>
					<Browse category="Snails" />
				</div>
			</div>
		);
	}
}

export default Snails;