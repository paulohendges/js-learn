// reduzir um array em um unico elemento
const numeros = [5, 50, 80, 100, 150, 24, 15 ];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0)


// retornando os pares -> utilizar sempre o filter mas da para usar o reduce
const pares = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 3 === 0) acumulador.push(valor)
    return acumulador;
}, [])


// retornando valores x 2 -> utilizar sempre o map mas da para usar o reduce
const valores = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador.push(valor * 2)
    return acumulador;
}, [])

console.log(valores);


const pessoas = [
    { nome: 'Paulo', idade: 27 },
    { nome: 'Bernardo', idade: 8 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Miranda', idade: 70 },
]

// retorne a pessoa mais velha
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);