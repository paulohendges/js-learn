const produto = { nome: 'Caneca', preco: 1.8 };
const caneca = {
    ...produto,
    material: 'porcelana'
};
caneca.preco = 2.5;

// atribuicao de um objeto a outra variavel
const canecaAssign = Object.assign({}, produto, {material: 'porcelana'});
canecaAssign.preco = 1.0

console.log(produto);
console.log(caneca);
console.log(canecaAssign);

// chaves do objeto
const produto2 = {nome: 'Produto', preco: 1.0 };
console.log(Object.keys(produto2));


// não deixa um objeto ser alterado
const produto3 = {nome: 'Produto', preco: 1.0 };
console.log(Object.freeze(produto3));

const produto4 = {nome: 'Produto 4', preco: 1.5 };
Object.defineProperty(produto4, 'nome', {
    writable: false
});
// pega a consiguração da propriedade do objeto
console.log(Object.getOwnPropertyDescriptor(produto4, 'nome'));


// pega somente valores
const produto5 = { nome: 'Produto 4', preco: 1.2 };
console.log(Object.values(produto5));

// pega somente valores e propriedades
const produto6 = { nome: 'Produto 4', preco: 1.2 };
console.log(Object.entries(produto6));
for (let [chave, valor] of Object.entries(produto6)) {
    console.log(chave, valor);
}
