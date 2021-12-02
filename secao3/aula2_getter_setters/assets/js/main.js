// defineProperty - Getter e Setters
// proteção das propriedades
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // pode ser lida mostra a chave
        configurable: true, // pode apagar a chave, nao permite reconfigurar,
        get: function() {
            return estoque;
        },
        set: function(val) {
            if (typeof val !== 'number') {
                console.log('Bad value');
                return;
            }
            estoque = val;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 1;
console.log(p1.estoque);