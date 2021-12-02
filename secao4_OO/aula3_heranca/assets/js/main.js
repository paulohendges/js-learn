class DispositivoEletronico {

    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }
        this.ligado = false
    }

}

const d1 = new DispositivoEletronico('Telefone');
d1.desligar();
d1.ligar();
console.log(d1);

class SmartFone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, hasWifi) {
        super(nome);
        this.hasWifi = hasWifi
    }
}

const s1 = new SmartFone('Galaxy', 'Preto', 'S10');
s1.ligar();
console.log(s1);