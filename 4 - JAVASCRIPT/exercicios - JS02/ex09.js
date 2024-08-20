/* Ex 09 - Faça um programa onde ele leia 4 números. 
Em cada caso, ele deve retornar a mensagem condizente: 
- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES.
 Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares. */

let array = [3, 1, 5, 7];

console.log(`array de números a serem validados = [${array}]`);

let todosSaoImpares = true;
let todosSaoPares = true;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        todosSaoPares = false;
    } else {
        todosSaoImpares = false;
    }
}

if (todosSaoImpares) {
    console.log("TODOS OS NÚMEROS SÃO IMPARES");
} else if (todosSaoPares) {
    console.log("TODOS OS NÚMEROS SÃO PARES");
} else { 
    console.log("Há números pares e ímpares");
}
