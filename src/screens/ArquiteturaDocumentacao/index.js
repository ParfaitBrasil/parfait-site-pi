import React, { Component } from "react";
import * as seo from "../../helpers/seo";

import { Link } from "react-router-dom";

import { Breadcrumb, Collapse } from "antd";

import { CaretRightOutlined } from '@ant-design/icons';

class ArquiteturaDocumentacao extends Component {
	componentDidMount() {
		document.body.classList.add("page-arquitetura-documentacao");

		seo.setTitle("Documentação técnica");
	}

	componentWillUnmount() {
		document.body.classList.remove("page-arquitetura-documentacao");
	}

	render() {
		const { Panel } = Collapse;

		return (
			<main id="site-main" role="main">
				<div className="container">
					<Breadcrumb>
						<Breadcrumb.Item>
							<Link to="/">Home</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<Link to="/portfolio/4">Portfólio</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>Arquitetura de Software</Breadcrumb.Item>
						<Breadcrumb.Item>Documentação técnica</Breadcrumb.Item>
					</Breadcrumb>
					<h2>Documentação técnica</h2>
					<p className="subtitle">
						Perguntas e respostas sobre nossa aplicação.
					</p>

					<Collapse
						bordered={false}
						defaultActiveKey={["1"]}
						className="site-collapse-custom-collapse"
					>
						<Panel
							header="O que esta aplicação faz?"
							key="1"
							className="site-collapse-custom-panel"
						>
							<p>A aplicação será uma plataforma que oferecerá por meio digital locação de maquinário e prestação de serviços agrônomos, como outros serviços por meio de assinatura.</p>
						</Panel>
						<Panel
							header="Quem usa esta aplicação?"
							key="2"
							className="site-collapse-custom-panel"
						>
							<p>Agrônomos e produtores rurais de baixo e alto nível.</p>
						</Panel>
						<Panel
							header="Qual a arquitetura da aplicação?"
							key="3"
							className="site-collapse-custom-panel"
						>
							<p>Utilizaremos da arquitetura VIPER, a mesma cogitada pela empresa de software aplicado em locomoção Uber.</p>
						</Panel>
						<Panel
							header="Onde está o código fonte?"
							key="4"
							className="site-collapse-custom-panel"
						>
							<p>Atualmente numa plataforma de hospedagem de aplicações chamada Vercel.</p>
						</Panel>
						<Panel
							header="Como rodar o código fonte na minha máquina?"
							key="5"
							className="site-collapse-custom-panel"
						>
							<p>Você terá acesso ao código fonte somente se possuir permissões no repositório da aplicação.</p>
						</Panel>
						<Panel
							header="Como usar a API da aplicação?"
							key="6"
							className="site-collapse-custom-panel"
						>
							<p>Nossa aplicação ainda não possui uma API.</p>
						</Panel>
						<Panel
							header="Como fazer o deploy da aplicação?"
							key="7"
							className="site-collapse-custom-panel"
						>
							<p>Através da plataforma de hospedagem Vercel.</p>
						</Panel>
						<Panel
							header="Como consigo ver erros, logs e monitorar a aplicação?"
							key="8"
							className="site-collapse-custom-panel"
						>
							<p>A Vercel proporciona vários recursos para requisições de informações; logs completos; ferramentas de relatórios de erros; rastreamento de monitoramento de tempo de resposta.</p>
						</Panel>
						<Panel
							header="Como posso acessar a aplicação?"
							key="9"
							className="site-collapse-custom-panel"
						>
							<p>Através do repositório no github, e para instalar e iniciar a aplicação é preciso usar o npm.</p>
						</Panel>
						<Panel
							header="Qual o tipo de modelagem usada para documentar a aplicação?"
							key="10"
							className="site-collapse-custom-panel"
						>
							<p>Será utilizado UML para a criação dos modelos do sistema.</p>
						</Panel>
						<Panel
							header="Quais são os frameworks usados para construir a aplicação?"
							key="11"
							className="site-collapse-custom-panel"
						>
							<p>Os frameworks utilizados na construção da aplicação foram React.js, Ant Design e Sass.</p>
						</Panel>
					</Collapse>
				</div>
			</main>
		);
	}
}

export default ArquiteturaDocumentacao;
