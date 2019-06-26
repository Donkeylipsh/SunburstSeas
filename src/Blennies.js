import React, { Component } from "react";
import Browse from "./Browse";

class Blennies extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2 className="breadcrumb">Fish</h2>
					<h2 className="breadcrumb">>></h2>
					<h3 className="breadcrumb">Blennies</h3>
					<p>Slim pickings, as they don't need the stress on captivity</p>
					<p>No clownfish, those bastards are too mean and a pain in the ass</p>
					<Browse category="Blennies" />
				</div>
			</div>
		);
	}
}

export default Blennies;