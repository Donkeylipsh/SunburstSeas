import React, { Component } from "react";
import { NavLink,
		HashRouter
} from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
import BrowseNav from "./BrowseNav";

class Browse extends Component{
	
	render(){
		function buildContent(category){
		
			var browseContent = [];
			
			for(var i = 0; i < 10; i++){
					var index = i + 1;
					var cardName = category + index;
					var myKey = category + Date.now + index;
					browseContent.push(<NavLink to="/details">
										<FeaturedCard key={myKey} name={cardName} />
										</NavLink>);
				}
			
			return (
				<div>
					{browseContent}
				</div>
		);
	}
		var livestock = buildContent(this.props.category);
		
		return(
			<HashRouter>
				<div>
					<BrowseNav current={this.props.category} />
					{livestock}
				</div>
			</HashRouter>
		);
	}
}

export default Browse;