import React, { Component } from "react";
import ContactNav from "./ContactNav";
import CartNav from "./CartNav";
import BrowseNav from "./BrowseNav";
import HomeIcon from "./HomeIcon";


class NavBars extends Component{
	render(){
		return(
			<div id="nav-bars">
				<div className="top-nav-container">
					<ContactNav />
					<CartNav />
				</div>
				<div className="top-nav-container">
					<HomeIcon />
					<BrowseNav />
				</div>
			</div>
		);
	}
}

export default NavBars;