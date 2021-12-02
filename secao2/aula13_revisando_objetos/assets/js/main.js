// objeto literal
const pessoa = {
    nome: 'paulo'
};

// factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto());

// constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// new = {} <- this ao objeto
const p2 = new Pessoa('Luiz', 'Otávio');
console.log(p2)