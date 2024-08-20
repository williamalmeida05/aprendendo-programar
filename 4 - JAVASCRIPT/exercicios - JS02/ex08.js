/* Ex 08 - Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5. */

const numberRandom = Math.floor(Math.random() * 200) + 1;

console.log(`O número aleatório gerado foi ${numberRandom}`);

// Verifica se o número é par
if (numberRandom % 2 == 0) {
    console.log(`\nO número ${numberRandom} é par`);

    // Verifica se o número par é divisível por 5
    if (numberRandom % 5 == 0) {
        console.log(`O número ${numberRandom} é par e divisível por 5`);
    }
} else {
    console.log(`O número ${numberRandom} é ímpar`);

    // Função para verificar se um número é primo
    function ehPrimo(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    // Verifica se o número ímpar é primo
    if (ehPrimo(numberRandom)) {
        console.log(`O número ${numberRandom} é primo e ímpar`);
    }
}




