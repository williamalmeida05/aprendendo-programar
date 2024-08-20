// Ex 06 - Incluir 10% de mercado para as companhias - Depois de adicionar os 10%, deve filtrar para apresentar as empresas fundadas antes de 2000 - Por fim somar o valor de mercado


const list = [20,3,234,12,17,541,6,87,275,100]

const companies = [
    { name: 'Samsumg', marketValue: 50, CEO: 'Kim Hyuk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerber', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]



const add1porcentMarket = company => {
    company.marketValue += company.marketValue / 10
    return company
}

const newMarketValue = companies.map(add1porcentMarket) 
// console.log(newMarketValue)


const listFoundedOn = newMarketValue.filter( (founded) => {
    return founded.foundedOn < 2000
})
// console.log(listFoundedOn)

const allMarketValue = listFoundedOn.reduce( ((acc, current) => acc + current.marketValue), 0)

console.log(allMarketValue)