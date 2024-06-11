/* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

const prompt = require('prompt-sync')();

function tempoVida (qtdCigarros, qtsAnos) {
    totalMinutosPerdidos = qtdCigarros * 10 * qtsAnos * 365;
    totalHoras = totalMinutosPerdidos / 60;
    totalDias = parseInt(totalHoras / 24);
    return totalDias;
}
cigarrosDia = prompt("Quantidade de cigarros por dia: ");
anos = prompt("Quantidade de anos: ");


total = tempoVida(cigarrosDia, anos);

console.log(`${total} de dias perdidos.`);

