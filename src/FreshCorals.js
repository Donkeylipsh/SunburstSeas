import React, { Component } from "react";
import BrowseProducts from "./BrowseProducts";

class FreshCorals extends Component {
	render(){
		return(
			<div className="center-content">
				<div>
					<h1>Fresh Corals</h1>
					<p><em>All Fresh products posted in the last 10 days</em></p>
				</div>
				<BrowseProducts />
			</div>
		);
	}
}

export default FreshCorals;