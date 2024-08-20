/* Ex 08 - Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. 
Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true. */

//Diferente

const arrayOne = ["Neymar", "Messi"]
console.log(`O nome ${arrayOne[0]} é diferente do nome ${arrayOne[1]} ? ${arrayOne[0] != arrayOne[1]}`)

//Igual

const arraySecond = ["Messi", "Messi"]
console.log(`O nome ${arraySecond[0]} é diferente do nome ${arraySecond[1]} ? ${arraySecond[0] != arraySecond[1]}`)
