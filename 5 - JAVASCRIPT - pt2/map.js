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
const students = [
    {name: 'Will', age: 25,},
    {name: 'Rodri', age: 43,},
    {name: 'Anelka', age: 21,},
    {name: 'João', age: 43,},
    {name: 'Carlos', age: 13,},
    {name: 'Marcos', age: 20,},
    {name: 'Ana', age: 26,}   
];

const newArray = numbers.map( (number) => {
    return number * 2
})

console.log(newArray)

const newStudents = students.map( (student) =>{
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }
    return newStudent
})

console.log(newStudents)