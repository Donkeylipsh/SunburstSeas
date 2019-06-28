import React, { Component } from "react";

class CartItem extends Component{
	render(){
		return(
			<div id="cart-item-container">
				<div>
					<div id="cart-image"></div>
				</div>
				<div id="cart-text">
					<h3>{this.props.item}</h3>
					<p>This is a description of the item in your cart</p>
				</div>
				<div>
					<button>+</button>
					<p>1</p>
					<button>-</button>
				</div>
			</div>
		);
	}
}

export default CartItem;