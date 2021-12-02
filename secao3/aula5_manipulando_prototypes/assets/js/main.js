const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = {};
objC.chaveC = 'C';

// definindo no objB o objA como prototype
// definido no objC o objB como prototype, que irá pegar o objA também como herança
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA, objC.chaveB, objC.chaveC);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
});
p3.nome = 'Caneca2';
p3.aumento(10);
console.log(p3);
