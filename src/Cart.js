import React, { Component } from "react";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";

class Cart extends Component{
	render(){
		return(
			<div>
				<h1 className="center-content">Cart</h1>
				<CartItem item={this.props.item} />
				<Subtotal amount={this.props.amount}/>
			</div>
		);
	}
}

export default Cart;