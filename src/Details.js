import React, { Component } from "react";

class Details extends Component{
	render(){
		return(
			<div>
				<h2>Product Details</h2>
				<div>
					<ul>
						<li>Type: SPS</li>
						<li>Temperment: Peaceful</li>
						<li>Placement: Middle</li>
						<li>Lighting: High</li>
						<li>Flow: High</li>
					</ul>
				</div>
				<button>Add to Cart</button>
			</div>
		);
	}
}

export default Details;