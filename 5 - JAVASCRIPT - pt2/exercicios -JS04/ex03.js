// Ex 03 - Criar um novo array o qual vai apresenta apenas números pares e divisíveis por 5

const list = [20,3,234,12,17,541,6,87,275,1000];

let newList = list.filter((numbers) => {
    return numbers % 2 == 0 && numbers % 5 == 0;
})

console.log(newList)