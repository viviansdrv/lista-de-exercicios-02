/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require('prompt-sync')();

let numeros = [];
let continuar = true;
let resposta;
let soma = 0;
let menor;
let media;
let pares = 0;

while (continuar) {
    let numero = parseFloat(prompt('Digite um número: '));
    numeros.push(numero);

    resposta = prompt('Deseja continuar? (S/N): ').toLowerCase();
    if (resposta !== 's') {
        continuar = false;
    }
}

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

if (numeros.length > 0) {
    menor = numeros[0];
}

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    }
}

media = soma / numeros.length;

console.log('A soma dos número digitados é:', soma );
console.log('O menor número é:', menor);
console.log('A média dos valores digitados é:', media.toFixed(2));
console.log('Quantidade de números pares:', pares);


