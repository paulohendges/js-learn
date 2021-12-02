const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 29,
    endereco: {
        rua: 'Avenida brasil',
        numero: 320
    }
}

// Atribuição por desestruturação
const { nome, endereco: { rua: endRua, numero: endNumero }, endereco } = pessoa

console.log(nome, endRua, endNumero, endereco);

const { nome: testNome, ...rest } = pessoa
console.log(testNome, rest);