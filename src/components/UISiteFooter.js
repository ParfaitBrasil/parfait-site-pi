import React, { Component } from "react";

class UISiteFooter extends Component {
	render() {
		return (
			<footer id="site-footer">
				<div className="container">
					<p>Startup desenvolvida para o Projeto Interdisciplinar da <a href="https://unifil.br" target="_blank" rel="noopener noreferrer">Unifil</a>.</p>
					<img className="logo" src="logo.svg" alt="bush" />
				</div>
			</footer>
		);
	}
}

export default UISiteFooter;