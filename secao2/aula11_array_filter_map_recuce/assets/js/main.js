// reduzir um array em um unico elemento
const numeros = [5, 50, 80, 100, 150, 24, 15, 123, 24, 23, 32, 31, 9, 2 ];
const numerosPares = numeros.filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor, 0);

console.log(numerosPares);