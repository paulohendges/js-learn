function Pessoa(nome, sobrenome) {

    // Privados do metodo
    const ID = 123456;
    const metodoInterno = function() {
        console.log('bla');
    }

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
p1.metodo();