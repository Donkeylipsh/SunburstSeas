import React, { Component } from "react";
import coralPic from "./img/coral.png";
import {NavLink, HashRouter} from "react-router-dom";

class ProductCard extends Component{
	render(){
		var section = this.props.section;
		if (!section){
			section = "Fresh";
		}
		return(
			<HashRouter>
				<NavLink to="./details">
					<div className="product-card center-content">
						<img src={coralPic} className="product-card-pic" alt="Coral Pic" />
						<h2 className="product-name">{section} {this.props.index}</h2>
						<h3 className="product-price">$60</h3>
					</div>
				</NavLink>
			</HashRouter>
		);
	}
}

export default ProductCard;