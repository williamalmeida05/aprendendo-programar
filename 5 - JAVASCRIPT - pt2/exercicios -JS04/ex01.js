/* Desafio de Map */

// Ex 01 - Criar nova array o qual vai informar que se a pessoa for vip é do setor Black, e se não for vip ficará no setor Green

const list = [
    {name: 'Will', vip: true},
    {name: 'Rodri', vip: false},
    {name: 'Anelka', vip: true},
    {name: 'João', vip: true},
    {name: 'Carlos', vip: false},
    {name: 'Marcos', vip: true},
    {name: 'Ana', vip: false}   
]


const newList = list.map((person)=>{
    const validated = {
        name: person.name,
        vip: person.vip,
        sector: person.vip ? 'Black' : 'Green'
    }
    return validated
})

console.log(newList)

// Observação: The jump of the cat foi o operador ternário feito na linha do sector.