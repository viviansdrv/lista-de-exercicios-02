/* Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */ 

const prompt = require('prompt-sync')();

velocidade = prompt("Digite a velocidade do carro ");

if (velocidade <= 80) {
    console.log(`Sem multas.`)
} else {
    multa = (velocidade - 80) * 5
    console.log(`Multa = ${multa}`);
}


