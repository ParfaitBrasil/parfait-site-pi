const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

const calculadora = (a, b, operacao) => operacao(a, b);

console.log(calculadora(10, 5, soma));
console.log(calculadora(10, 5, subtracao));
console.log(calculadora(10, 5, multiplicacao));
console.log(calculadora(10, 5, divisao));