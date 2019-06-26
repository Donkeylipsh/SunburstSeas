import React, { Component } from "react";
import Browse from "./Browse";

class Corals extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Corals</h2>
					<p>Hottest corals on the web</p>
					<p>WYSIWYG corals, no altered images or overly blue lighting here</p>
					<Browse category="Corals" />
				</div>
			</div>
		);
	}
}

export default Corals;