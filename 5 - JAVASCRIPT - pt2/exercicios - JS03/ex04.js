/* Ex 04 - Escreva um programa onde, você chame uma função, e ela diga que ano estamos! */

function anoAtual(){
    let now = new Date()
    let year = now.getFullYear()

    return year
}

console.log(anoAtual())