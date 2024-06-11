/* . Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */ 

let prompt = require('prompt-sync')();

let carroLuxo = false;
let aluguelCarroPopular = 90.0;
let aluguelCarroLuxo = 150.0;
let kmPercorridos = 0;
let qtdDias = 0;
let valorKmPercorridos = 0;
let valorTotal = 0;
let valorTotalKm = 0;

let tipoCarro = parseInt(prompt(`Qual é o tipo de carro alugado? 1 - Luxo ou 2 - Popular: `));

if (tipoCarro === 1) {
    carroLuxo = true;
} else if (tipoCarro ===2) {
    carroLuxo = false;
} else {
    console.log(`Digite somente 1 ou 2.`)
} 

function calcularKmPercorridos (carroLuxo, kmPercorridos) {
    if (carroLuxo) {
        if (kmPercorridos <= 200) {
            valorKmPercorridos = kmPercorridos * 0.3;
        } else {
            valorKmPercorridos = kmPercorridos * 0.25;
        }
    } else {
        if (kmPercorridos <= 100) {
            valorKmPercorridos = kmPercorridos * 0.2;
        } else {
            valorKmPercorridos = kmPercorridos * 0.1;
        }
    }
    return valorKmPercorridos;
}

kmPercorridos = parseFloat(prompt("Digite quantos km você percorreu: "));
kmPercorridos = parseFloat(kmPercorridos.toFixed(2));
qtdDias = parseInt(prompt("Quantidade de dias que você ficou com o carro: "));

function calcularValorTotal (carroLuxo, valorTotalKm, qtdDias) {
    let valor;
    if (carroLuxo) {
        valor = (aluguelCarroLuxo * qtdDias) + valorTotalKm;
    } else {
        valor = (aluguelCarroPopular * qtdDias) + valorTotalKm;
    }
    return valor;
}

valorTotalKm = calcularKmPercorridos(carroLuxo, kmPercorridos);
valorTotal = calcularValorTotal(carroLuxo, valorTotalKm, qtdDias);

console.log(`Você rodou ${kmPercorridos} km por ${qtdDias} dias e tem que pagar ${valorTotal} reais`);

