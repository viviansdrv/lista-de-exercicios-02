/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

const prompt = require('prompt-sync')();

distancia = prompt("Digite a distância que você quer percorrer: ");

if (distancia <= 200) {
    valorDistancia = distancia * 0.5;
} else {
    valorDistancia = distancia * 0.45;
}

console.log(`O valor a ser pago é ${valorDistancia}`)