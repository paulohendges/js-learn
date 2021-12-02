// escreva uma função que recebe um numero e
// retorne o seguinte:
// Número divisível por 3 -> return Fizz
// Número divisível por 5 -> return Buzz
// Número divisível por 3 e 5 -> return Fizz Buzz
// Número não é divisível por 3 e 5 = Retorna o proprio numero enviado
// Checar se o número é realmente um número = Retorna o próprio número se não for
// Utilizar a função com números de 0 a 100

const fizBuzz = (n) => {
    if (!(Number(n))) return n;

    const isDividedBy3 = n % 3 === 0;

    const isDividedBy5 = n % 5 === 0;

    if (isDividedBy3 && isDividedBy5) return 'Fizz Buzz';

    if (!isDividedBy3 && !isDividedBy5) return n;

    if (isDividedBy3) return 'Fizz';

    if (isDividedBy5) return 'Buzz';
}

// console.log(fizBuzz('qwe'));
// console.log(fizBuzz(15));
// console.log(fizBuzz(12));
// console.log(fizBuzz(3));
// console.log(fizBuzz(5));

for (let i = 0; i <= 100; i++) {
    console.log(fizBuzz(i));
}
