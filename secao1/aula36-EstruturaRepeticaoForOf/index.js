const nome = 'Luiz Otavio';

for (letra of nome) {
    console.log(letra);
}

const nomes = ['bla', 'ble', 'bli'];
nomes.forEach(function(el, indice, array) {
    console.log(el, indice, array);
});