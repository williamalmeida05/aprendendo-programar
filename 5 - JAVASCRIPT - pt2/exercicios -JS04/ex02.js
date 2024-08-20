
// Ex 02 - se o estudante tirou 7 ou mais ele está aprovado, se ele tirou abaixo de 7 ele está reprovado.

const students = [
    {name: 'Will', testGrade:7},
    {name: 'Rodri', testGrade:5},
    {name: 'Anelka', testGrade:8},
    {name: 'João', testGrade:9},
    {name: 'Carlos', testGrade:3},
    {name: 'Marcos', testGrade:2},
    {name: 'Ana', testGrade:10}
]

const newStudents = students.map((student) => {
    const validatedNote = {
        name: student.name,
        finalResult: student.testGrade >= 7 ? 'approved' : 'disapproved'
    }
    return validatedNote
})

console.log(newStudents)