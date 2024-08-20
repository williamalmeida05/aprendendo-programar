/* Ex 07 - Faça um programa onde leia um numero e diga se ele é par ou impar.*/

const numberRandom = Math.floor(Math.random() * 200) + 1

console.log(`O número gerado foi ${numberRandom}`)

if(numberRandom % 2 == 0){
    console.log(`\nO número ${numberRandom} é par`)
}else{
    console.log(`O número ${numberRandom} é impar`)
}