/*
    ESTRUTURA DE REPETIÇÃO - FOR IN
*/

const student = {
    name: "Will",
    age: 24,
    genre: "male"
}

for(let property in student){
    console.log(`${property}: ${student[property]}`)
}

// for(let propety in student){
//     console.log(propety)
// }