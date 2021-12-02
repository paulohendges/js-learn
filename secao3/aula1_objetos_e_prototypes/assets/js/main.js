// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // pode ser lida mostra a chave
        value: estoque, // referencia da propriedade q sera setada
        writable: false, // valor nao pode ser alterado
        configurable: false, // pode apagar a chave, nao permite reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // pode ser lida mostra a chave
            value: nome, // referencia da propriedade q sera setada
            writable: true, // valor nao pode ser alterado
            configurable: true, // pode apagar a chave, nao permite r
        },
        preco: {
            enumerable: true, // pode ser lida mostra a chave
            value: preco, // referencia da propriedade q sera setada
            writable: true, // valor nao pode ser alterado
            configurable: true, // pode apagar a chave, nao permite r
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
console.log(p1);
console.log(Object.keys(p1));