/*
    - CLASSES
*/

class Person{

    constructor(name, age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} year old`)
    }
}

const newPerson = new Person("Will", 24)

newPerson.talk()