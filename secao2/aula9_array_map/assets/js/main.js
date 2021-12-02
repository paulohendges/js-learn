// altera os valores de um array com base em uma regra
// sempre vai ter o mesmo tamanho do array original
const numeros = [5, 50, 1, 2, 3, 5, 8, 10, 15,22, 23];
const numerosEmDobro = numeros.map((valor) => {
    return valor * 2;
});

// console.log(numerosEmDobro);

const pessoas = [
    { nome: 'Paulo', idade: 27 },
    { nome: 'Bernardo', idade: 8 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Miranda', idade: 55 },
]
const nomes = pessoas.map((valor) => {
    return valor.nome
})

const idades = pessoas.map((valor) => {
    return { idade: valor.idade }
})

const ids = pessoas.map((valor, indice) => {
    const novoObjeto = { ...valor };
    novoObjeto.id = indice;
    return novoObjeto;
})
console.log(pessoas);
console.log(ids);