function init() {
    const form = document.querySelector('.form');
    const imc = {
        peso: 0,
        altura: 0,
        resultadoIMC: 0,
        calcularIMC: function() {
            const imc = this.peso / this.altura ** 2;
            return imc.toFixed(2);
        },
        classificarIMC: function(valorIMC) {
            const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
            if (valorIMC >= 39.9) return nivel[5];
            if (valorIMC >= 34.9) return nivel[4];
            if (valorIMC >= 29.9) return nivel[3];
            if (valorIMC >= 24.9) return nivel[2];
            if (valorIMC >= 18.5) return nivel[1];
        }
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criarParagrafo();

        if (isValid) {
            p.classList.add('paragrafo-sucesso');
        } else {
            p.classList.add('paragrafo-erro');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    function criarParagrafo() {
        return document.createElement('p');
    }

    function eventoCalcular(e) {
        e.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        imc.peso = parseFloat(peso.value);
        imc.altura = parseFloat(altura.value);

        if (!imc.peso) {
            setResultado(`Pesoa inválido`, false);
            return false;
        }

        if (!imc.altura) {
            setResultado(`Altura Inválida`, false);
            return false;
        }

        const valorIMC = imc.calcularIMC();
        const classificacaoIMC = imc.classificarIMC(valorIMC);

        setResultado(`Seu IMC é ${valorIMC} - (${classificacaoIMC})`, true);
    }

    form.addEventListener('submit', eventoCalcular);
}
init();