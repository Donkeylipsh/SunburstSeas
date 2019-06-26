import React, { Component } from "react";
import Browse from "./Browse";

class Gobies extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Fish</h2>
					<h3>Gobies</h3>
					<p>Slim pickings, as they don't need the stress on captivity</p>
					<p>No clownfish, those bastards are too mean and a pain in the ass</p>
					<Browse category="Gobies" />
				</div>
			</div>
		);
	}
}

export default Gobies;