import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
class UISiteHeader extends Component {
	render() {
		return (
			<header id="site-header">
				<div className="container">
					<div className="header-container">
						<Link to="/">
							<img className="logo" src="logo.svg" alt="bush" />
						</Link>
						<nav>
							<ul>
								<li>
									<HashLink to="/#sobre">sobre</HashLink>
								</li>
								<li>
									<HashLink to="/#quem-somos">quem somos</HashLink>
								</li>
								<li>
									<Link to="/portfolio">portfólio</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default UISiteHeader;
