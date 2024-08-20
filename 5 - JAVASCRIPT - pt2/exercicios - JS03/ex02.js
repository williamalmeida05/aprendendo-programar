/* Ex 02 - Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. */


function tabuada(number) {
    if (number > 10 || number < 0) {
        console.log("O número é maior que 10 ou menor que 0. A tabuada não será gerada.");
        return;
    }
    for (let i = 0; i <= 10; i++) {
        console.log(i * number);
    }
}

tabuada(1)