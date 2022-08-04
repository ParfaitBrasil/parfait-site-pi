import React, { Component, Fragment } from "react";
import { Collapse, Select } from "antd";

import * as seo from "../../helpers/seo";

import { BiChevronDown } from "react-icons/bi";
import UISkeleton from "../../components/UISkeleton";

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			selected: "",
		};
	}

	componentDidMount() {
		document.body.classList.add("page-portfolio");

		seo.setTitle("Portfólio");
	}

	componentWillUnmount() {
		document.body.classList.remove("page-portfolio");
	}

	onSelectChange = (value) => {
		this.setState({
			isLoading: true,
			selected: value,
		});

		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, Math.floor(Math.random() * 1000) + 500);
	}

	render() {
		const { Panel } = Collapse;
		const { Option } = Select;
		const { selected, isLoading } = this.state;

		return (
			<main id="site-main" role="main">
				<section className="portfolio-section" id="portfolio">
					<div className="container">
						<h2>portfólio</h2>
						<p className="subtitle">Por aqui você acompanha nosso progresso, obtendo acesso ao histórico de atividades desenvolvidas clicando no respectivo período.</p>
						
						<div className="select-container">
							<Select
								placeholder="Selecione um período"
								onSelect={this.onSelectChange}
								suffixIcon={<BiChevronDown size="22px" color="#6BA083" />}
							>
								<Option value="terceiro">3º Período</Option>
								<Option value="quarto">4º Período</Option>
							</Select>
						</div>
						
						{
							selected !== "" &&
							<Fragment>
								{
									isLoading ?
										<Fragment>
											<UISkeleton h={105} />
											<UISkeleton h={105} />
											<UISkeleton h={105} />
											<UISkeleton h={105} />
										</Fragment>
									: 
										<Fragment>
											{
												selected === "terceiro" ?
													<Collapse
														bordered={false}
														accordion
														expandIconPosition="right"
													>
														<Panel header={
															<div className="header">
																<h3>Análise e Projeto de Algoritmos</h3>
																<p className="professor">Anderson Macedo</p>
															</div>
														}
														key="1">
															<div>
																<p>Nessa disciplina desenvolvemos um sistema de Login com validação de usuário e senha, utilizando a linguagem Java.</p>
																<a href="download/Login.zip" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Análise e Projeto Orientados a Objetos</h3>
																<p className="professor">Marcelo Bicalho</p>
															</div>
														}
														key="2">
															<div>
																<p>Nessa disciplina desenvolvemos um projeto em C#.net para exemplificar os itens da Orientação à Objetos.</p>
																<a href="download/OrientaçãoObjetos.rar" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Elementos de Cálculo e Álgebra Linear</h3>
																<p className="professor">Tania Camila</p>
															</div>
														}
														key="3">
															<div>
																<p>Nessa disciplina demonstramos uma opção de cálculo para a seção de CPF, atráves do produto escalar de vetores.</p>
																<a href="download/CálculoCPF.pdf" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Gerenciamento de Projetos</h3>
																<p className="professor">Bruno Coleto</p>
															</div>
														}
														key="4">
															<div>
																<p>Nessa disciplina gravamos um vídeo de poucos minutos, conhecido por muitos como "Pitch", onde o objetivo é engajar outras pessoas em torno do seu projeto, ou melhor, vender a sua ideia a uma pessoa.</p>
																<iframe src="https://drive.google.com/file/d/17PFmAB1NxVzzAB83FKOq5Ds_MgYDyj7Y/preview" width="780" height="439" allow="autoplay"></iframe>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Processo de Desenvolvimento de Software</h3>
																<p className="professor">Anderson Macedo</p>
															</div>
														}
														key="5">
															<div>
																<p>Nessa disciplina fizemos um levantamento de todas as funcionalidades existentes no projeto, escolhemos duas e construímos as etapas de acordo com o modelo do ciclo de vida Iterativo.</p>
																<a href="download/Funcionalidades.pdf" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
													</Collapse>
												: selected === "quarto" ?
													<Collapse
														bordered={false}
														accordion
														expandIconPosition="right"
													>
														<Panel header={
															<div className="header">
																<h3>Análise e Projeto de Algoritmos</h3>
																<p className="professor">Anderson Macedo</p>
															</div>
														}
														key="1">
															<div>
																<p>Nessa disciplina desenvolvemos um sistema de Login com validação de usuário e senha, utilizando a linguagem Java.</p>
																<a href="download/Login.zip" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Análise e Projeto Orientados a Objetos</h3>
																<p className="professor">Marcelo Bicalho</p>
															</div>
														}
														key="2">
															<div>
																<p>Nessa disciplina desenvolvemos um projeto em C#.net para exemplificar os itens da Orientação à Objetos.</p>
																<a href="download/OrientaçãoObjetos.rar" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Elementos de Cálculo e Álgebra Linear</h3>
																<p className="professor">Tania Camila</p>
															</div>
														}
														key="3">
															<div>
																<p>Nessa disciplina demonstramos uma opção de cálculo para a seção de CPF, atráves do produto escalar de vetores.</p>
																<a href="download/CálculoCPF.pdf" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Gerenciamento de Projetos</h3>
																<p className="professor">Bruno Coleto</p>
															</div>
														}
														key="4">
															<div>
																<p>Nessa disciplina gravamos um vídeo de poucos minutos, conhecido por muitos como "Pitch", onde o objetivo é engajar outras pessoas em torno do seu projeto, ou melhor, vender a sua ideia a uma pessoa.</p>
																<iframe src="https://drive.google.com/file/d/17PFmAB1NxVzzAB83FKOq5Ds_MgYDyj7Y/preview" width="780" height="439" allow="autoplay"></iframe>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Processo de Desenvolvimento de Software</h3>
																<p className="professor">Anderson Macedo</p>
															</div>
														}
														key="5">
															<div>
																<p>Nessa disciplina fizemos um levantamento de todas as funcionalidades existentes no projeto, escolhemos duas e construímos as etapas de acordo com o modelo do ciclo de vida Iterativo.</p>
																<a href="download/Funcionalidades.pdf" className="ant-btn ant-btn-primary">Baixar</a>
															</div>
														</Panel>
													</Collapse>
												: ''
											}
										</Fragment>
								}
							</Fragment>
						}
					</div>
				</section>
			</main>
		);
	}
}

export default Portfolio;