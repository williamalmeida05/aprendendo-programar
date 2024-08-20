/* 03 ex - Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33 */

const raizQuadrada = Math.sqrt(50)
const multiply = raizQuadrada * 10
const division = multiply / 33

console.log(`A raiz quadrada de 50 é igual à ${raizQuadrada}`)
console.log(`Ao multiplicar por 10 o valor da raíz quadrada de 50, ficará igual à ${multiply}`)
console.log(`Realizando a divisão por 33, ficará igual à ${division}`)

// Segunda forma de realizar a atividade
console.log("\nSegunda forma de realizar a atividade:")

const calculation = ((Math.sqrt(50) * 10) / 33)
console.log(`Calculo da atividade solicitada é igual à ${calculation}`)