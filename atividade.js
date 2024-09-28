var nome = " Gustavo ";
var idade = " Sua idade ";
console.log("Olá meu nome é"  + nome +  "e tenho"  + idade +  "anos.")


var nome = " SeuNome ";
var cidade = " SuaCidade ";
console.log(nome + "é de" + cidade +'.');

let num1 = 20;
let num2 = 5;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);

let base = 20;
let altura = 5;
let area = (base * altura) / 2;
console.log(`A área do triângulo é ${area}.`)

let nota1 = 7.0;
let nota2 = 8.0;
let nota3 = 10.0;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`O resultado da média é ${media}.`);

const precoOriginal = 150;
const percentualDesconto = 20;
const desconto = (precoOriginal * percentualDesconto) / 100;
const precoFinal = precoOriginal - desconto;
console.log(`O preço original do produto é R$ ${precoOriginal.toFixed(2)}.`);
console.log(`Com um desconto de ${percentualDesconto}%, o valor final é R$ ${precoFinal.toFixed(2)}.`);

let salarioBruto = 3000;
let aliquota = 0.15;
let imposto = salarioBruto * aliquota;
console.log(`O imposto de renda a ser pago é ${imposto}.`);

let valorInicial = 100;
let taxaCambio = 5.5;
let valorConvertido = valorInicial * taxaCambio;
console.log(`O valor convertido é ${valorConvertido}.`);

let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(`A temperatura em Fahrenheit é ${temperaturaFahrenheit}.`);

let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
console.log(`O seu IMC é ${imc.toFixed(2)}.`);
