let prompt = require('prompt-sync')();

function obterEscolhaUsuario() {
    let escolha = parseInt(prompt('Escolha (1 - Pedra, 2 - Papel, 3 - Tesoura): '), 10);
    return escolha;
}

function gerarEscolhaComputador() {
    return Math.floor(Math.random() * 3) + 1;
}

function determinarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return 'Empate';
    } else if (
        (escolhaUsuario === 1 && escolhaComputador === 3) ||
        (escolhaUsuario === 2 && escolhaComputador === 1) ||
        (escolhaUsuario === 3 && escolhaComputador === 2)
    ) {
        return 'Você venceu!';
    } else {
        return 'Você perdeu!';
    }
}

function converterEscolha(escolha) {
    switch (escolha) {
        case 1:
            return 'Pedra';
        case 2:
            return 'Papel';
        case 3:
            return 'Tesoura';
        default:
            return 'Escolha inválida';
    }
}

function jogar() {
    let escolhaUsuario = obterEscolhaUsuario();
    let escolhaComputador = gerarEscolhaComputador();

    console.log(`Você escolheu: ${converterEscolha(escolhaUsuario)}`);
    console.log(`Computador escolheu: ${converterEscolha(escolhaComputador)}`);

    let resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
    console.log(resultado);
}

jogar();
