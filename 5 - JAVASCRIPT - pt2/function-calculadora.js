/*

    - Functions
    - Calculadora

*/


function sum(num1, num2, operacao) {


    switch (operacao) {
        case '+':
            return num1 + num2
            break;

        case '-':
            return num1 - num2
            break;

        case '*':
            return num1 * num2
            break;

        case '/':
            return num1 / num2
            break;
        
        default:
            return num1 + num2
    }

}

console.log(sum(2, 4, '+'))
console.log(sum(2, 4, '-'))
console.log(sum(2, 4, '*'))
console.log(sum(2, 4, '/'))
console.log(sum(2, 4, 'x'))