import React, { Component } from "react";

class Subtotal extends Component{
	render(){
		return(
			<div id="subtotal-container">
				<h2>Cart Total</h2>
				<ul>
					<li>Subtotal: {this.props.amount}</li>
					<li>Shipping: $55.00</li>
					<li>Tax: $17.50</li>
					<li><h4>Total: $322.50</h4></li>
				</ul>
				<button>Checkout</button>
			</div>
		);
	}
}

export default Subtotal;