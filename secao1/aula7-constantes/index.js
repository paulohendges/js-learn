// Não podemos criar constantes com palavras reservadas;
// Constantes precisam ter nomes significativos;
// Não devemos começar o nome de uma constante com um número;
// Não podem conter espaços ou traços;
// Sempre utilizar camelCase;
// Constantes em JS são case-sensitive -> nomeCliente !== nomecliente
// Não se pode re-criar Constante com const
const nome = 'João';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado+=5

console.log(resultadoTriplicado);
console.log(resultadoDuplicado);
console.log(resultado);

console.log(typeof primeiroNumero);