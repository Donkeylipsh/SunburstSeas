import React, { Component } from "react";
import {NavLink, HashRouter} from "react-router-dom";
		
class CartNav extends Component{
	render(){
		return(
			<HashRouter>
				<nav id="cart-nav">
					<a href="/">Wish List</a>
					<a href="/">My Account</a>
					<NavLink to="/cart">Cart</NavLink>
				</nav>
			</HashRouter>
		);
	}
}		
		
export default CartNav;