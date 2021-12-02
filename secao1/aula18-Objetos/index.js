// objeto literal
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1.nome, pessoa1.sobrenome);


function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa2 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa2);

const pessoa3 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi ....`);
    },
    incrementaIdade() {
        this.idade++;
    },
    falaIdade(){
        console.log(`A minha idade atual é ${this.idade}`);
    }
}

pessoa3.fala();
pessoa3.falaIdade();
pessoa3.incrementaIdade();
pessoa3.falaIdade();