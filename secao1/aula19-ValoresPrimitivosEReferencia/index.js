/*
 Primitivos: (imutáveis) - string, number, boolean, undefinde, null (bigint, symbol)
 São copiados quando são passados para nova variavel utilizando atribuição =

 Referência: (mutável) - array, object e functions
 São passados por referencia de memória e serão afetados em qualquer variável onde houver atriuição
 */


// Spread
// dessa forma será copiado para a nova variavel
let a = [1, 2, 3];
let b = [...a];

b.push(4)
console.log(a, b);

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

const c = {...pessoa};
c.nome = 'bla';
console.log(c, pessoa);