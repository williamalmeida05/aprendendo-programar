// Ex 04 - Criar um novo array com empresas que fora fundadas depois de 1975 e que tenha mais de 200 milhoes de valor no mercado

const companies = [
    { name: 'Samsumg', marketValue: 50, CEO: 'Kim Hyuk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerber', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]

const newCompanies = companies.filter((company) => {
    return company.foundedOn > 1975 && company.marketValue > 200
})

console.log(newCompanies)