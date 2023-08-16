function isPrime(number) {
  if (number <= 1) {
    return false;  // Números menores ou iguais a 1 não são primos
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;  // Se for divisível por algum número entre 2 e a raiz quadrada, não é primo
    }
  }
  return true;  // Se não foi encontrado divisor entre 2 e a raiz quadrada, é primo
}

function printIsPrime(number) {
  if (isPrime(number)) {
    console.log("1 - O número " + number + " é primo.");
  } else {
    console.log(`0 - O número ${number} não é primo.`);
  }
}

// Exemplo de uso
const inputNumber = 0;  // Altere este valor para o número que você deseja verificar
printIsPrime(inputNumber);
