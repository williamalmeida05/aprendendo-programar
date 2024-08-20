/* Ex 04 - Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor. */

function encontrarMaiorEMenor(num1, num2, num3) {
    let maior = num1
    let menor = num1
  
    if (num2 > maior) {
      maior = num2
    }
    if (num3 > maior) {
      maior = num3
    }
  
    if (num2 < menor) {
      menor = num2
    }
    if (num3 < menor) {
      menor = num3
    }
  
    console.log("O maior número é: " + maior);
    console.log("O menor número é: " + menor);
  }
  
  // Exemplo de uso:
  let numero1 = 3
  let numero2 = 1
  let numero3 = 11
  
  encontrarMaiorEMenor(numero1, numero2, numero3)
  