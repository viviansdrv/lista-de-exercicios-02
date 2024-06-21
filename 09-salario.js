/* . Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
 */

const prompt = require('prompt-sync')();

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (true) {
    let salario = parseFloat(prompt('Digite o salário do funcionário: '));

    // Verificação se o salário é um número válido
    while (isNaN(salario) || salario <= 0) {
        console.log('Salário inválido. Por favor, digite um valor positivo.');
        salario = parseFloat(prompt('Digite o salário do funcionário: '));
    }

    // Leitura do sexo
    let sexo = prompt('Digite o sexo do funcionário (M/F): ').toUpperCase();

    // Verificação se o sexo é válido
    while (sexo !== 'M' && sexo !== 'F') {
        console.log('Sexo inválido. Por favor, digite "M" para masculino ou "F" para feminino.');
        sexo = prompt('Digite o sexo do funcionário (M/F): ').toUpperCase();
    }

    // Atualização dos totais de salário
    if (sexo === 'M') {
        totalSalarioHomens += salario;
    } else if (sexo === 'F') {
        totalSalarioMulheres += salario;
    }

    // Perguntar se o usuário quer continuar
    let continuar = prompt('Você quer continuar? (S/N): ').toUpperCase();

    // Verificação se a resposta é válida
    while (continuar !== 'S' && continuar !== 'N') {
        console.log('Resposta inválida. Por favor, digite "S" para sim ou "N" para não.');
        continuar = prompt('Você quer continuar? (S/N): ').toUpperCase();
    }

    // Se o usuário não quiser continuar, sair do loop
    if (continuar === 'N') {
        break;
    }
}

// Exibição dos totais de salário
console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
