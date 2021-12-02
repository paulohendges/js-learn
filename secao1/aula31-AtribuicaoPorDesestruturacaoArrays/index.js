let a = 'A';
let b = 'B';
let c = 'C';

// const numeros = [1,2,3];
// [a, b, c] = numeros;

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
// ... rest operator, ... spread
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres, resto);