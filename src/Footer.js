import React, { Component } from "react";
import About from "./About";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import FooterLinks from "./FooterLinks";

class Footer extends Component{
	render(){
		return(
			<div id="footer-block">
				<About />
				<Newsletter />
				<Testimonials />
			</div>
		);
	}
}

export default Footer;