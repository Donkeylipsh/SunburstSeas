import React, { Component } from "react";

class Cart extends Component{
	render(){
		return(
			<div className="page-container solid-bg">
				<div className="page-container">
					<h2>Cart</h2>
					<p>Purchases are currently unavilable</p>
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<button>Checkout</button>
				</div>
			</div>
		);
	}
}

export default Cart;