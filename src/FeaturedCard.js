import React, { Component } from "react";

class FeaturedCard extends Component {
	render(){
		return(
			<div className="featured-card">
				<div className="featured-image"></div>
				<h4>{this.props.name}</h4>
			</div>
		);
	}
}

export default FeaturedCard;