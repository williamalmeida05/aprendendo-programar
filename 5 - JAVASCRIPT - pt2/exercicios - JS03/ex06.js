/* Ex 06 -  A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.A prefeitura deseja saber: 
        - média do salário da população; 100 + 100 + 100 = 300 300/3 = 100
        - média do número de filhos; 
        - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 
    - Faça isso usando uma função! */

let pessoa = [{
    salario: 200,
    numedoDeFilhos: 2
},
{
    salario: 400,
    numedoDeFilhos: 2
},
{
    salario: 500,
    numedoDeFilhos: 1
},
{
    salario: 250,
    numedoDeFilhos: 3
},
{
    salario: -100,
    numedoDeFilhos: 0
},
]

function encontreSalarioMaisAltoMaisBaixo(pessoasInformadas){
    let i = 0
    let mediaSalario = 0
    let mediaPessoa = 0
    let salarioMaisAlto = 0

   while(pessoasInformadas[i].salario > 0){
        mediaSalario += pessoasInformadas[i].salario
        mediaPessoa += pessoasInformadas[i].numedoDeFilhos
        pessoasInformadas[i].salario > salarioMaisAlto ? salarioMaisAlto = pessoasInformadas[i].salario : salarioMaisAlto = salarioMaisAlto
        i++
   }
   console.log(`Média de salário R${(mediaSalario / i).toFixed(0)}`)
   console.log(`Média de filhos ${(mediaPessoa / i).toFixed(0)}`)
   console.log(`Maior salário R${salarioMaisAlto}`)
}

encontreSalarioMaisAltoMaisBaixo(pessoa)

/*
 for (let i = 0; i <= pessoasInformadas.length; i++){

        const salario = pessoasInformadas[i].salario
        const filhos = pessoasInformadas[i].numedoDeFilhos

        if(salario > salarioMaisAlto) salarioMaisAlto = salario

        if(salario < 0){
            console.log(`Média de salário R${(mediaSalario / i).toFixed(0)}`)
            console.log(`Média de filhos ${(mediaPessoa / i).toFixed(0)}`)
            console.log(`Maior salário R${salarioMaisAlto}`)
            break
        }else{
            mediaSalario = mediaSalario + salario;
            mediaPessoa += filhos
        }
    }
*/