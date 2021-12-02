const frutas = [
    'pera', 'maça', 'uva'
];

for (let fruta in frutas) {
    console.log(frutas[fruta])
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 28
}

for(let i in pessoa) {
    console.log(pessoa[i]);
}