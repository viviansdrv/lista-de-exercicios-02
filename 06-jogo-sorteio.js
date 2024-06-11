/* Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

let prompt = require('prompt-sync')();

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 5) + 1;
}

let numero = parseInt(prompt("Digite um número de 1 a 5: "));

while (numero < 0 || numero > 5) {
    numero = parseInt(prompt("Digite um número de 1 a 5: "));
}

numeroAleatorio = gerarNumeroAleatorio();

while (numero != numeroAleatorio) {
    numero = parseInt(prompt("Errou! Digite um número de 1 a 5: "));
} 

console.log(`Você acertou! \nNúmero digitado: ${numero} \nNúmero aleatório: ${numeroAleatorio}`);