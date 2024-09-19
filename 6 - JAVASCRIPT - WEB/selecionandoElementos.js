
//  getElementById() // Trás apenas um elemento (element)

/*
const element = document.getElementById("main-text")

console.log(element)
*/

//  getElementClassName() // Trás diversos elementos (HTML Collection)

/*
const element = document.getElementsByClassName("paragraph")
console.log(element)
*/


// getElementByTagName // Trás diversos elementos (HTML Collection)

/*
const element = document.getElementsByTagName("body")
console.log(element)
*/

// querySelector // Trás apenas um elemento, o primeiro que encontrar (element)

/*
const element = document.querySelector("p")
console.log(element)
*/

// querySelector // Trás TODOS os elementos que encontrar (NodeList)

/*
const element = document.querySelectorAll("p")
console.log(element)
*/

const element = document.getElementsByName("my-input")
console.log(element)