import React, { Component } from "react";
import { HashLink } from 'react-router-hash-link';

class UISiteHeader extends Component {
	render() {
		return (
			<header id="site-header">
				<div className="container">
					<div className="header-container">
						<img className="logo" src="logo.svg" alt="bush" />
						<nav>
							<ul>
								<li>
									<HashLink to="#sobre">
										sobre
									</HashLink>
								</li>
								<li>
									<HashLink to="#quem-somos">
										quem somos
									</HashLink>
								</li>
								<li>
									<HashLink to="#portfolio">
										portfólio
									</HashLink>
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