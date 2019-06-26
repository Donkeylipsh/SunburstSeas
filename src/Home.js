import React, { Component } from "react";
import FeaturedContent from "./FeaturedContent";
import MissionStatement from "./MissionStatement";

class Home extends Component{
	render(){
		return(
			<div className="page-container">
				<FeaturedContent />
				<MissionStatement />
			</div>
		);
	}
}

export default Home;