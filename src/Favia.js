import React, { Component } from "react";
import Browse from "./Browse";

class Favia extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Corals</h2>
					<h3>Favia</h3>
					<p>Hottest corals on the web</p>
					<p>WYSIWYG corals, no altered images or overly blue lighting here</p>
					<Browse category="Favia" />
				</div>
			</div>
		);
	}
}

export default Favia;