/* Ex 11 - Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.*/

const numberRandom = Math.random()

console.log(Math.ceil(numberRandom))


// Correção

console.log(Math.floor(Math.random() * (100 - 10) + 10)) 

// Math.floor para realizar orredondamento
//Math.random para criar o número aleatório entre 0 e 1
