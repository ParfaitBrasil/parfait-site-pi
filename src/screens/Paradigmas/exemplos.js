import React, { Component } from "react";
import * as seo from "../../helpers/seo";

import { Link } from "react-router-dom";

import { Breadcrumb } from "antd";

class Exemplos extends Component {
	componentDidMount() {
		document.body.classList.add("page-paradigmas-exemplos");

		seo.setTitle("Exemplos");
	}

	componentWillUnmount() {
		document.body.classList.remove("page-paradigmas-exemplos");
	}

	render() {
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
						<Breadcrumb.Item>Paradigmas de Linguagens de Programação</Breadcrumb.Item>
						<Breadcrumb.Item>Exemplos</Breadcrumb.Item>
					</Breadcrumb>
					<h2>Exemplos</h2>
					<p className="subtitle">
						Confira abaixo exemplos de um código representado em diferentes paradigmas.
					</p>
					<h3>Paradigma funcional</h3>
					<p>
						O paradigma funcional é aquele que destaca o uso das funções e, na hora de resolver um problema, o divide em blocos onde são implementadas funções. Estas funções definem algumas variáveis que podem ou não retornar resultados.<br/>
						Este paradigma é indicado quando a resolução de algum entrave depende majoritariamente de uma base matemática. Após a conclusão, esta solução deverá ser integrada.
					</p>

					<figure>
                        <img src="paradigmas/exemplos/01.png" alt="Paradigma funcional" />
                    </figure>

					<h3>Paradigma orientado a objetos</h3>
					<p>
						O paradigma da POO(Programação Orientada a Objetos) é um modelo de análise, projeto e programação baseado na aproximação entre o mundo real e o mundo virtual, através da criação e interação entre objetos, atributos, códigos, métodos, entre outros. A programação orientada a objetos tem o propósito principal de aproximar o mundo lógico da programação e o mundo em que vivemos. À vista disso, ela parte do princípio de que tudo é objeto  isso mesmo, tudo o que existe são os objetos.<br/>
						No entanto, eles necessitam ser criados (tal qual no mundo real). Para isso, eles precisam de uma espécie de fôrma, de um invólucro, algo que possa lhes dar ao menos seu aspecto inicial: um ponto de partida!
					</p>
					<figure>
                        <img src="paradigmas/exemplos/02.png" alt="Paradigma orientado a objetos" />
                    </figure>

					<h3>Paradigma orientado a aspectos</h3>
					<p>
						É um paradigma baseado em meta informações. Primeiramente devemos saber que meta informação é, resumidamente, uma “informação de uma informação”.<br/>
						Por exemplo, vamos imaginar o seguinte: você tem um carro e esse carro é da cor “preta”. Essa é uma informação do carro, porém “preta” é um atributo. “Cor” seria uma meta informação do carro em um contexto onde a informação a ser tratada é o veículo em si.<br/><br/>
						Já “preta” seria o valor do atributo “cor”, mas esse valor de atributo só tem “significado” ou “força” se sabermos sobre o que “cor” se trata, ou seja: se soubermos a meta informação – ou significado – de “cor”. Às vezes, nos deparamos com responsabilidades que são difíceis de isolar ou que exigem a escrita de código que não fazem parte do domínio da aplicação; porém, ainda dizem respeito à aspectos essenciais.<br/><br/>
						A programação orientada a aspectos vem para nos ajudar nisso, pois é uma abordagem que permite a separação dos componentes funcionais de uma forma concisa, utilizando-se de mecanismos de abstração e de composição. O termo “aspecto” se refere aquilo que faz parte da aparência de algo.
					</p>
					<figure>
                        <img src="paradigmas/exemplos/03.png" alt="Paradigma orientado a aspectos" />
                    </figure>
				</div>
			</main>
		);
	}
}

export default Exemplos;