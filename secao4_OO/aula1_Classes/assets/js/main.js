class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando...`)
    }

    comer() {
        console.log(`${this.nome} está comendo...`)
    }

    bebendo() {
        console.log(`${this.nome} está bebendo...`)
    }
}

const p1 = new Pessoa('Paulo', 'Hendges');
console.log(p1)