import React, { Component } from "react";
import ProductCard from "./ProductCard";

class BrowseProducts extends Component{
	render(){
		return(
			<div>
				<div className="browse-container">
					<h1>{this.props.section}</h1>
					<div className="browse-products">
						<ProductCard section={this.props.section} index="1" />
						<ProductCard section={this.props.section} index="2" />
						<ProductCard section={this.props.section} index="3" />
						<ProductCard section={this.props.section} index="4" />
						<ProductCard section={this.props.section} index="5" />
						<ProductCard section={this.props.section} index="6" />
						<ProductCard section={this.props.section} index="7" />
						<ProductCard section={this.props.section} index="8" />
						<ProductCard section={this.props.section} index="9" />
						<ProductCard section={this.props.section} index="10" />
						<ProductCard section={this.props.section} index="11" />
						<ProductCard section={this.props.section} index="12" />
						<ProductCard section={this.props.section} index="13" />
						<ProductCard section={this.props.section} index="14" />
						<ProductCard section={this.props.section} index="15" />
					</div>
				</div>
			</div>
		);
	}
}

export default BrowseProducts;