import React, { Component } from "react";
import Browse from "./Browse";

class Jawfish extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Fish</h2>
					<h3>Jawfish</h3>
					<p>Slim pickings, as they don't need the stress on captivity</p>
					<p>No clownfish, those bastards are too mean and a pain in the ass</p>
					<Browse category="Jawfish" />
				</div>
			</div>
		);
	}
}

export default Jawfish;