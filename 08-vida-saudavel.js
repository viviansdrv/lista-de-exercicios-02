/* Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar */

let prompt = require('prompt-sync')();

let horasMes = parseInt(prompt("Quantas horas de atividades físicas você fez no mês? "));

function calcularPontos (horasMes) {
    let valor = 0;
    let pontos = 0;
    if (horasMes > 0  && horasMes <= 10) {
        pontos = horasMes* 2;
    } else if (horasMes > 10 && horasMes <= 20) {
        pontos = horasMes * 5;
    } else {
        pontos = horasMes *  10;
    }
    valor = pontos * 0.05;
    return valor;
}

valorReceber = calcularPontos(horasMes);
console.log(`Ganhos mensais: ${valorReceber}`);