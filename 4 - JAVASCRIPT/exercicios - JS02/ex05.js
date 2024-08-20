/* Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.*/



const arrayObjetos = [ 
    {
      nome: "Maik",
      idade: 32,
      sexo: "Masculino",
      profissão: "Advogado",
      nacionalidade: "Espanhol"
    },
    {
      nome: "Barbara",
      idade: 21,
      sexo: "Feminino",
      profissão: "Arquiteta",
      nacionalidade: "Brasileira"
    },
    {
      nome: "João",
      idade: 16,
      sexo: "Masculino",
      profissão: "Desenvolvedor JS",
      nacionalidade: "Boliviano"
    },
    {
      nome: "Pepe",
      idade: 18,
      sexo: "Masculino",
      profissão: "Atleta",
      nacionalidade: "Sueca"
    },
    {
      nome: "Luana",
      idade: 25,
      sexo: "Feminino",
      profissão: "Astronauta",
      nacionalidade: "Chilena"
    }
  ];
  
  const validaNacionalidade = "Brasileira";
  
  arrayObjetos.forEach(pessoa => {
    if(pessoa.idade >= 18 && pessoa.nacionalidade === validaNacionalidade){
      console.log(`A ${pessoa.nome} foi aprovada no processo.`)
    } else {
      console.log(`Não foi dessa vez, ${pessoa.nome}. Tente na próxima!`)
    }
  })
  
