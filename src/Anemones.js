import React, { Component } from "react";
import Browse from "./Browse";

class Anemones extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<div><h2>Anemones</h2></div>
					<p>Check out thease beautiful Anemones</p>
					<p>You won't find these anywhere else</p>
					<Browse category="Anemones" />
				</div>
			</div>
		);
	}
}

export default Anemones;