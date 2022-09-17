import React, { Component, Fragment } from "react";
import { Collapse, Select, Divider } from "antd";
import { withRouter } from "react-router-dom";

import * as seo from "../../helpers/seo";

import { BiChevronDown } from "react-icons/bi";
import UISkeleton from "../../components/UISkeleton";

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.periods = [
			{
				id: "3",
				name: "3º Período",
			},
			{
				id: "4",
				name: "4º Período",
			},
		]

		this.state = {
			period: this.props.match.params.period ?? 0,
			selected: 0,
			isLoading: false,
		};
	}

	componentDidMount() {
		document.body.classList.add("page-portfolio");

		seo.setTitle("Portfólio");

		if(this.state.period !== 0) {
			this.onSelectChange(this.state.period);
		}
	}

	componentWillUnmount() {
		document.body.classList.remove("page-portfolio");
	}

	onSelectChange = (value) => {
		let period = this.periods.find(period => period.id == value)?.id ?? 0;
		this.setState({
			isLoading: true,
			period: String(period),
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
		const { period, isLoading } = this.state;

		const isValidPeriod = this.periods.find(period => period.id == this.state.period)?.id;

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
								defaultValue={isValidPeriod ? period : undefined}
							>
								{
									this.periods.map(period => (
										<Option key={period.id} value={period.id}>{period.name}</Option>
									))
								}
							</Select>
						</div>
						
						{
							period !== 0 &&
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
												period == "3" ?
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
												: period == "4" ?
													<Collapse
														bordered={false}
														accordion
														expandIconPosition="right"
													>
														<Panel header={
															<div className="header">
																<h3>Arquitetura de Software</h3>
																<p className="professor">Adail Roberto Nogueira</p>
															</div>
														}
														key="1">
															<div>
																<p>Em desenvolvimento...</p>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Gerência de Configuração e Controle de Versão</h3>
																<p className="professor">Marcelo Bicalho</p>
															</div>
														}
														key="2">
															<div>
																<p>Em desenvolvimento...</p>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Introdução a Banco de Dados</h3>
																<p className="professor">Edson Shinki Kaneshima</p>
															</div>
														}
														key="3">
															<div>
																<p>Em desenvolvimento...</p>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Paradigmas de Linguagens de Programação</h3>
																<p className="professor">Adail Roberto Nogueira</p>
															</div>
														}
														key="4">
															<div>
																<h4>HTML</h4>
																<h5>Histórico</h5>
																<p>O Html foi criado em 1992 por Tim Bernes Lee e Robert Caillau. Com o Html foi possível disponibilizar links de navegação para outras páginas. Inicialmente ela não possuía muitos recursos de aparência, mas com a necessidade de uma aparência mais amigável as outras versões foram dando mais liberdades para isso.</p>
																<h5>Paradigmas de programação:</h5>
																<ul>
																	<li>Paradigma imperativo;</li>
																	<li>Linguagem interpretada;</li>
																	<li>Linguagens de scripts.</li>
																</ul>
																<h5>Aplicabilidade</h5>
																<p>O Html é suportada por vários navegadores e para criar uma página basta ter um editor de texto e conhecer como criar uma página Html. A principal Aplicabilidade do HTML é de criação de páginas para Web.</p>
																<h5>Características técnicas</h5>
																<p>Um código HTML não é compilado e sim interpretado por um browser, isto o torna extremamente simples e não requer uma maquina potente nem softwares para ser executado. Basicamente podemos considerar que um código HTML precisa de um computador para ser armazenado o código escrito, chamamos de servidor, e um browse na maquina cliente para visualizar a pagina guardada neste servidor.</p>
																<p>Uma das principais características do HTML se reflete no fato de se um browser não "entender" um determinado comando, este é ignorado e não é apresentado, não originando mensagem de erro e afetando minimamente o restante do documento.</p>
																<p>Entretanto, como o HTML é uma linguagem descritiva, nem sempre diferentes navegadores exibem a mesma apresentação em cada página. Ou seja, os detalhes codificados no HTML podem ser suficientes para um deles, mas não suficientes para outro. Sendo assim cada navegador poderá interpretar os dados de uma forma diferente, portanto, quanto mais descritiva a página for, maiores serão as chances do documento ser interpretado da mesma forma por navegadores diferentes.</p>
																
																<Divider />
																
																<h4>CSS</h4>
																<h5>Histórico</h5>
																<p>A primeira versão da linguagem de estilos CSS foi lançada em 1996 pelo W3C para ser utilizada em conjunto com a linguagem de marcação HTML para formatar os elementos da página. O CSS 1 oferecia suporte a uma série de formatações como o alinhamento de textos, propriedades para a definição de fontes, cores, tabelas, posicionamento e muito mais.</p>
																<h5>Paradigmas de programação:</h5>
																<ul>
																	<li>Paradigma declarativo.</li>
																</ul>

																<Divider />

																<h4>JavaScript</h4>
																<h5>Histórico</h5>
																<p>Em 1993, o Centro Nacional de Aplicações de Supercomputação (NCSA), uma unidade da Universidade de Illinois em Urbana-Champaign, lançou o NCSA Mosaic, o primeiro navegador gráfico popular da Web, que desempenhou um papel importante na expansão do crescimento da nascente World Wide Web além do nicho NeXTSTEP onde a World Wide Web havia se formado três anos antes.</p>
																<h5>Paradigmas de programação:</h5>
																<p>Pode ser usada na forma procedural, estruturada, e imperativo. JavaScript é conhecida por também ser orientada a objeto através de protótipos. Mas como toda linguagem moderna, ela usa do paradigma funcional e também sofre forte influência da programação orientada a eventos.</p>
																<p>Recentemente a orientação a objeto pode ser expressada através de classes também, ainda que de forma apenas sintática. Mesmo assim o uso é um pouco diferente do que encontramos nas linguagens mais conhecidas que se dizem OOP (C++, C#, Java, etc.), até porque a tipagem dinâmica força diferenças. De qualquer forma adota-se um pouco o estilo OO, mas está longe de ser puramente OO, como o é Smalltalk, por exemplo.</p>
																<p>A linguagem usa tipagem dinâmica e é usada como script. É dita como tipagem fraca, mas isso não ocorre em todas situações, possuindo tipos primitivos e dicionários para preencher os protótipos e simular as classes (nativamente na linguagem). Costuma rodar de forma interpretada</p>
															</div>
														</Panel>
														<Panel header={
															<div className="header">
																<h3>Sistemas Operacionais</h3>
																<p className="professor">Marc Antonio</p>
															</div>
														}
														key="5">
															<div>
																<p>Em desenvolvimento...</p>
															</div>
														</Panel>
													</Collapse>
												: <p className="text-center">Esse período não foi encontrado.</p>
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

export default withRouter(Portfolio);