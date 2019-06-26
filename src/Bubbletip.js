import React, { Component } from "react";
import Browse from "./Browse";

class Bubbletip extends Component{
	render(){
		console.log("Bubbletip: In Bubbletip");
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<div>
						<h2>Anemones</h2>
						<h3>Bubbletip</h3>
					</div>
					<p>Check out thease beautiful Anemones</p>
					<p>You won't find these anywhere else</p>
					<Browse category="Anemones" />
				</div>
			</div>
		);
	}
}

export default Bubbletip;