// Aritméticos
// + Adição e Concatenação
// -
// /
// *
// ** -> potenciação
// % -> resto da divisão
// Precedências:
// () -> ** -> * / % -> + -

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 - num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// operador de incremento
let contador = 1;
contador++; // 2
++contador; // 3

// operador de decremento
contador = 3;
contador--; // 2
--contador; // 1

// operadores de atribuição
// incremento -> contador = contador + 2;
// multiplicação -> contador = contador * 2;
// potenciacao -> contador = contador ** 2;
contador = 0;
contador += 2;
contador += 2;
contador += 2;
console.log(contador) // 6 de 2 em 2

// Nan - Not a Number
// parseInt() -> converte para inteiro
// parseFloat() -> converte para ponto flutuante float
// Number() -> converte tanto para um quanto para outro

let bla = 5.52;
console.log(Number(bla));