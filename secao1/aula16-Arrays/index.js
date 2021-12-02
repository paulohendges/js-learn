let arrNomes = ['Luiz', 'Maria', 'João'];
const arrQualquerCoisa = ['bla', 1, null, true];

// adicionando novo item a um array
arrNomes.push('Fabio');
// adicionar novo item ao começo do array
arrNomes.unshift('Luiza');

// remove ultimo indice
let removidos = arrNomes.pop();

// remove o primeiro indice
removidos = arrNomes.shift();

// remover um indice por posição
delete arrNomes[1];

arrNomes = ['Luiz', 'Maria', 'João'];
// pegando array por fatiamento
// args (parametro inicial, até)
console.log(arrNomes.slice(0,2))

arrNomes = ['Luiz', 'Maria', 'João'];
console.log(arrNomes.slice(0,-2))

const arr = [1, 2, 3];
// array sempre vai ser object
console.log(typeof arr);
// verifica se é uma instancia de array
console.log(arr instanceof Array);