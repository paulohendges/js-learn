// criando um produto e uma camiseta que herda do produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(val) {
            if (typeof val !== 'number') return;
            estoque = val;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca dos guri', 8.5, 'Plástico', 5);
camiseta.aumento(100);
caneca.aumento(15);
caneca.estoque = 10;
console.log(caneca);