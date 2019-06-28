import React, { Component } from "react";
import BrowseProducts from "./BrowseProducts";

class Details extends Component{
	render(){
		return(
			<div>
				<div id="product-details">
					<div className="featured-image no-repeat"></div>
					<div id="product-info">
						<h2>Product Details</h2>
						<ul>
							<li><strong>Price:</strong> $60</li>
							<li><strong>Type:</strong> SPS</li>
							<li><strong>Temperment:</strong> Peaceful</li>
							<li><strong>Placement:</strong> Middle</li>
							<li><strong>Lighting:</strong> High</li>
							<li><strong>Flow:</strong> High</li>
						</ul>
						<div className="center-content">
							<button id="add-to-cart">Add to Cart</button>
						</div>
					</div>
				</div>
				<BrowseProducts section="Related Products" />
			</div>
		);
	}
}

export default Details;