// propriedade privada
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    // getter
    get velocidade() {
        return this[_velocidade];
    }

    // setter
    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0 ) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 90;
console.log(c1.velocidade);