/* Ex 05 - Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior */

function maiorMenor(numberOne, numberTwo){
    if(numberOne > numberTwo){
        console.log(`O numberOne ${numberOne} é maior que o numberTwo ${numberTwo}`)
    }else if(numberOne < numberTwo){
        console.log(`O numberTwo ${numberTwo} é maior que o numberOne ${numberOne}`)
    }else{
        console.log(`o numberOne ${numberOne} e numberTwo ${numberTwo} são iguais`)
    }
}

maiorMenor(3,3)