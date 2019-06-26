import React, { Component } from "react";
import Browse from "./Browse";

class Invertebrates extends Component {
	render(){
		return (
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Invertebrates</h2>
					<p>The unsung heroes of the hobby</p>
					<p>Expand your biodiversity to imporve your tank's health</p>
					<Browse category="Invertebrates" />
				</div>
			</div>
		);
	}
}

export default Invertebrates;