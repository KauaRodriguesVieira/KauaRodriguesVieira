//AULA: JAVASCRIPT;
//NOME_ALUNO:KAUA RODRIGUES VIEIRA, 2024100098;
//CODIGO_TURMA:123N-89719




// Definição da função isPrime(num) para verificar se um número é primo ou não.
function isPrime(num) {
    // Verifica se o número é menor ou igual a 1, que não são primos.
    if (num <= 1) {
        return false;
    }
    // Loop para verificar se o número é divisível por algum número entre 2 e a raiz quadrada do número.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Se o número for divisível por algum número no intervalo, ele não é primo.
        if (num % i === 0) {
            return false;
        }
    }
    // Se o número não for divisível por nenhum número no intervalo, ele é primo.
    return true;
}

// Definição da função findLargestPrimes() para solicitar um número ao usuário e encontrar os 10 maiores números primos a partir dele.
function findLargestPrimes() {
    // Solicita ao usuário um número como entrada e o converte para um valor inteiro.
    let userInput = parseInt(prompt("Digite um número para encontrar os 10 maiores números primos a partir dele:"));
    // Inicializa uma variável de contagem para contar os números primos encontrados.
    let count = 0;
    // Inicializa uma variável currentNum para armazenar o número atual que está sendo verificado.
    let currentNum = userInput;

    // Exibe uma mensagem indicando que os 10 maiores números primos estão sendo encontrados.
    console.log("Os 10 maiores números primos a partir de " + userInput + " são:");

    // Loop para encontrar os 10 maiores números primos a partir do número fornecido pelo usuário.
    while (count < 10) {
        // Verifica se o número atual é primo usando a função isPrime().
        if (isPrime(currentNum)) {
            // Se o número atual for primo, exibe-o e incrementa a contagem.
            console.log(currentNum);
            count++;
        }
        // Decrementa o número atual para verificar o próximo número.
        currentNum--;
    }
}

// Chama a função findLargestPrimes() para iniciar a busca pelos 10 maiores números primos.
findLargestPrimes();
