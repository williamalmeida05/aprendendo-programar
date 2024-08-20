/*
    For each
        utilidades:
            - percorrer arrays
*/

const students = [
    {name: 'Will', age: 25,},
    {name: 'Rodri', age: 43,},
    {name: 'Anelka', age: 21,},
    {name: 'João', age: 43,},
    {name: 'Carlos', age: 13,},
    {name: 'Marcos', age: 20,},
    {name: 'Ana', age: 26,}   
];

let allStudentsAge = 0

students.forEach((students,index) => {
    console.log(`O aluno chama-se ${students.name}, tem ${students.age} anos e está na posição ${index} do Array`)
})




/*let allStudentsAge = 0

students.forEach((students) =>{
    allStudentsAge += students.age
})

averageAge = allStudentsAge / students.length

console.log(`A média dos alunos é de ${averageAge.toFixed(0)}`)*/