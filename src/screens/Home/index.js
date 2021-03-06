import React, { Component } from "react";
import { Row, Col, Button, Collapse } from "antd";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import * as seo from "../../helpers/seo";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

class Home extends Component {
	componentDidMount() {
		document.body.classList.add("page-home");

		seo.setTitle("Locação e prestação de serviços agrícolas");
	}

	componentWillUnmount() {
		document.body.classList.remove("page-home");
	}

	render() {
		const { Panel } = Collapse;

		return (
			<main id="site-main" role="main">
				<section className="hero-section">
					<div className="container">
						<Row>
							<Col xs={24} md={12}>
								<div className="info-container">
									<h1>bush</h1>
									<h2>Encontre a prestação de serviço ou alugue seu maquinário.</h2>
									<Button type="primary">Saiba mais</Button>
								</div>
							</Col>
							<Col xs={24} md={12}>
								<img className="featured" src="featured.png" alt="Aplicativo" />
							</Col>
						</Row>
					</div>
				</section>
				<section className="about-section" id="sobre">
					<div className="container">
						<h2>sobre</h2>
						<p className="subtitle">A bush é uma plataforma para locação e prestação de serviços agrícolas.</p>

						<div className="text-container">
							<p>
								A dor a qual pretendemos resolver é a falta de segurança quando o assunto é contratação de serviços e locação de maquinário agrícola.
							</p>
							<p>
								Pensando nisso apresentamos uma proposta de desenvolver uma plataforma onde grandes e pequenos produtores possam se conectar e realizar negócios com segurança e praticidade.
							</p>
						</div>
					</div>
				</section>
				<section className="who-section" id="quem-somos">
					<div className="container">
						<h2>quem somos</h2>
						<p className="subtitle">Conheça um pouco sobre cada integrante da bush.</p>
						<div className="slides">
							<Swiper
								modules={[Autoplay, Pagination]}
								spaceBetween={20}
								slidesPerView={1.08}
								slidesPerGroup={1}
								pagination={{
									el: '.swiper-pagination',
									clickable: true,
									type: 'bullets'
								}}
								autoplay={{ delay: 5000 }}
								centeredSlides={true}
								centeredSlidesBounds={true}
								breakpoints={{
									768: {
										slidesPerView : 2.2,
										centeredSlides: false,
									},
									992: {
										slidesPerView : 3.2,
										centeredSlides: false,
									},
									1200: {
										slidesPerView : 4.2,
										centeredSlides: false,
									},
								}}
							>
								<SwiperSlide>
									<div className="who-item">
										<figure>
											<img src="who/leo.webp" alt="Leonardo Totti" />
										</figure>
										<h3>Leonardo Totti</h3>
										<a className="email" href="mailto:leonardototti@edu.unifil.br">leonardototti@edu.unifil.br</a>
										<div className="social-container">
											<a href="https://github.com/leonardototti/" target="_blank" rel="noopener noreferrer"><FaGithub size="24px" color="#143531" /></a>
											<a href="https://www.linkedin.com/in/leonardototti/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="24px" color="#143531" /></a>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="who-item">
										<figure>
											<img src="who/victor.webp" alt="Victor Ferri" />
										</figure>
										<h3>Victor Ferri</h3>
										<a className="email" href="mailto:victor.ferri@edu.unifil.br">victor.ferri@edu.unifil.br</a>
										<div className="social-container">
											<a href="https://github.com/victorferri/" target="_blank" rel="noopener noreferrer"><FaGithub size="24px" color="#143531" /></a>
											<a href="https://www.linkedin.com/in/victorferri/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="24px" color="#143531" /></a>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="who-item">
										<figure>
											<img src="who/gabriel_pereira.webp" alt="Gabriel Pereira" />
										</figure>
										<h3>Gabriel Pereira</h3>
										<a className="email" href="mailto:gabrielnino@edu.unifil.br">gabrielnino@edu.unifil.br</a>
										<div className="social-container">
											<a href="https://github.com/gabrielniino/" target="_blank" rel="noopener noreferrer"><FaGithub size="24px" color="#143531" /></a>
											<a href="https://www.linkedin.com/in/gabriel-gonçalves-90759920a/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="24px" color="#143531" /></a>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="who-item">
										<figure>
											<img src="who/gabriel_camacho.jpg" alt="Gabriel Camacho" />
										</figure>
										<h3>Gabriel Camacho</h3>
										<a className="email" href="mailto:gabrielcamacho@edu.unifil.br">gabrielcamacho@edu.unifil.br</a>
										<div className="social-container">
											<a href="https://github.com/gabrielhcamacho/" target="_blank" rel="noopener noreferrer"><FaGithub size="24px" color="#143531" /></a>
											<a href="https://www.linkedin.com/in/gabriel-hcamacho/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="24px" color="#143531" /></a>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="who-item">
										<figure>
											<img src="who/ariel.jpg" alt="Ariel Moreira" />
										</figure>
										<h3>Ariel Moreira</h3>
										<a className="email" href="mailto:arielmoreira@edu.unifil.br">arielmoreira@edu.unifil.br</a>
										<div className="social-container">
											<a href="https://github.com/arielmmoreira/" target="_blank" rel="noopener noreferrer"><FaGithub size="24px" color="#143531" /></a>
											<a href="https://www.linkedin.com/in/arielmmoreira/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="24px" color="#143531" /></a>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</section>
				<section className="portfolio-section" id="portfolio">
					<div className="container">
						<h2>portfólio</h2>
						<p className="subtitle">Por aqui você acompanha nosso progresso, obtendo acesso ao histórico de atividades desenvolvidas clicando no respectivo período.</p>
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
					</div>
				</section>
			</main>
		);
	}
}

export default Home;
