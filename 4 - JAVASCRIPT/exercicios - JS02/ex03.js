/* Ex 03 - Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem. */

const numberRandom = Math.floor(Math.random() * (10 - 1) + 1)

const winningNumber = Math.floor(Math.random() * (10 - 1) + 1)

console.log(numberRandom, "numberRandom")
console.log(winningNumber, "winningNumber")

if(numberRandom === winningNumber){
    console.log("Você ganhou")
} else{
    console.log("Você perdeu")
}