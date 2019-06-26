import React, { Component } from "react";
import FeaturedSection from "./FeaturedSection";

class FeaturedContent extends Component{
	render(){
		return(
			<div id="featured-container">
				<FeaturedSection section="Hot Deals" />
				<FeaturedSection section="New Arrivals" />
			</div>
		);
	}
}

export default FeaturedContent;