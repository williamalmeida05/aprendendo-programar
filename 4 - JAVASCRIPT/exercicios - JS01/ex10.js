/* Ex 10 - Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true.
João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto.
Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false. */

//Objetos diferetes

const object1 = {name: "Messi"}
const object2 = {name: "Neymar"}

const object3 = {name: "Messi"}
const object4 = {name: "Messi"}

console.log(object1.name == object2.name)
console.log(object3.name == object4.name)

//Objetos unico

const object5 = {fistName: "Messi", secondName: "Neymar"}
const object6 = {fistName: "Neymar", secondName: "Neymar"}

console.log(object5.fistName == object5.secondName)
console.log(object6.fistName == object6.secondName)