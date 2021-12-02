// IEEE 754 2008 padrão de numeração do js
let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1 + num2);

console.log(num1.toString() + num2);
console.log(typeof num1);


num1 = 1500;
// representacao binaria
console.log(num1.toString(2))

// arredondamento para casas decimais
// .50 > arredonda pra mais
// .50 < arredonda pra menos
num1 = 10.12141255125124;
num2 = 10.12501255125124;
console.log(num1.toFixed(2));
console.log(num2.toFixed(2));

// valida se um number é inteiro
// apenas inteiro
num1 = 10;
console.log(Number.isInteger(num1));

num1 = 10.10;
let temp = num1 * 'ola';
// NaN
console.log(Number.isNaN(temp));

// problema do js de arredondamentos de valores
num1 = 0.7;
num2 = 0.1;
num1 += num2;
num1 += num2;
num1 += num2;

console.log(num1);
console.log(Number.isInteger(num1));
console.log(Number((num1.toFixed(2))));

// resolvendo o problema no calculo MCGAIVER FURIOSO
num1 = 0.7;
num2 = 0.1;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);

