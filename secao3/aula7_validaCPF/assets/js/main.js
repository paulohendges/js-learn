function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    })
}

ValidaCpf.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criarDigito(cpfParcial);
    const digito2 = this.criarDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    return this.cpfLimpo === novoCpf;
}

ValidaCpf.prototype.criarDigito = function(cpf) {
    const arrCpf = Array.from(cpf);
    let regresso = arrCpf.length + 1;
    let total = arrCpf.reduce((ac, val) => {
        ac += (regresso * Number(val))
        regresso--;
        return ac;
    }, 0)
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCpf.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpfValidacao = new ValidaCpf('705.484.450-52');
console.log(cpfValidacao.valida());