/* Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o valor de A: "));
let b = parseFloat(prompt("Digite o valor de B: "));
let c = parseFloat(prompt("Digite o valor de C: "));

if (a + b > c && a + c > b && b + c > a) {
    console.log(`É possível formar uma triângulo`)
} else {
    console.log(`Não é possível formar uma triângulo`)
}
