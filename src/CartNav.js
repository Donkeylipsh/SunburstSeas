import React, { Component } from "react";
		
class CartNav extends Component{
	render(){
		return(
			<nav id="cart-nav">
				<a href="/">Wish List</a>
				<a href="/">My Account</a>
				<a href="/">Checkout</a>
				<a href="/">Cart</a>
			</nav>
		);
	}
}		
		
export default CartNav;