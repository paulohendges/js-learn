// primitivos
// string, number, undefined, null, boolean
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string

const num = 10; // number
const num1 = 10.52; // number

let nomeAluno; // undefined = não aponta para local algum em memória -> unicamente alocado pelo motor do JS.
let sobreNomeAluno = null; // Nulo -> não aponta para local nenhum em memória;

const boolean = true; // boolean (valor lógico)

// referencia
const a = [1, 2];
const b = a;
console.log(a, b);
b.push(3);
console.log(a, b);

