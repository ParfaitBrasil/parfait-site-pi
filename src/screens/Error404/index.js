import React, { Component } from "react";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";

import * as seo from "../../helpers/seo";

class Error404 extends Component {
	componentDidMount() {
		document.body.classList.add('page-error', 'page-error-404');

		seo.setTitle('Não encontrado');
	}

	componentWillUnmount() {
		document.body.classList.remove('page-error', 'page-error-404');
	}

	render() {
		return (
			<main id="site-main" role="main">
				<div className="container">
					<img className="logo" src="logo-alt.svg" alt="bush" />
					<h1>Página não encontrada</h1>
					<p>Não encontramos essa página em nosso servidor.</p>
					<Row justify="center">
						<Link to="/">
							<Button type="primary" block>Voltar ao início</Button>
						</Link>
					</Row>
				</div>
			</main>
		)
	}
}

export default Error404;