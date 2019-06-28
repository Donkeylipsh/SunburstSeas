import React, { Component } from "react";
import BrowseProducts from "./BrowseProducts";

class Browse extends Component{
	render(){
		return(
			<div>
				<BrowseProducts section={this.props.page} promo={this.props.promo} />
			</div>
		);
	}
}

export default Browse;