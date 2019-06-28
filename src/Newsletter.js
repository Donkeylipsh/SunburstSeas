import React, { Component } from "react";

class Newsletter extends Component{
	render(){
		return(
			<div className="footer-section">
				<h1>Newsletter</h1>
				<p>Receive 1 to 4 emails per month with updates on sales, new corals, and trade shows</p>
				<form>
					<input id="newsletter-input" placeholder="Enter email address"></input>
					<button id="newsletter-button">Subscribe</button>
				</form>
			</div>
		);
	}
}
export default Newsletter;