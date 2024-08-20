/*
    FILTER
    - Cria um novo array, a partir do array percorrido (array)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

const list = [
    {name: 'Will', vip: true},
    {name: 'Rodri', vip: false},
    {name: 'Anelka', vip: true},
    {name: 'João', vip: true},
    {name: 'Carlos', vip: false},
    {name: 'Marcos', vip: true},
    {name: 'Ana', vip: false}   
];

const justVip = list.filter(client => {
    return client.vip
})

console.log(justVip)

const students = [
    {name: 'Will', testGrade:7},
    {name: 'Rodri', testGrade:5},
    {name: 'Anelka', testGrade:8},
    {name: 'João', testGrade:9},
    {name: 'Carlos', testGrade:3},
    {name: 'Marcos', testGrade:2},
    {name: 'Ana', testGrade:10}
];

const newStudentList = students.filter((students => {
    return students.testGrade >= 7
}))

console.log(newStudentList)