/* Ex 03 - Escreva um programa onde, você chame uma função, e ela diga a hora exata! */

function horaExata(){
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    // Formatar para exibir sempre dois dígitos para horas, minutos e segundos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`
}

console.log(horaExata())