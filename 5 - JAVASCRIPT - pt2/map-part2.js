/*
    MAP / REDUCE / FILT
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo

*/

const numbers = [1,2,3,4]

const double = number => number * 2
const sum = number => number + 10
const minus = number => number - 5

const newArray = numbers.map(double).map(sum).map(minus)

console.log(newArray)