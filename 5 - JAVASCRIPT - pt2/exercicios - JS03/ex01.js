/* Ex 01 - Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou */

const chamaNumero = (number) => {
    for (i=1; i < number; i++) {
        console.log('contando...', i)
    }

}

chamaNumero(11)
