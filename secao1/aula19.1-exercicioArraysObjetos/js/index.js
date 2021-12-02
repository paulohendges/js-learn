function init() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    // };
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<strong>${nome.value}</strong><br/>`;
        resultado.innerHTML += `<strong>${sobrenome.value}</strong><br/>`
        resultado.innerHTML += `<strong>${peso.value}</strong><br/>`
        resultado.innerHTML += `<strong>${altura.value}</strong><br/>`

    }

    // adicionar escuta para o evento submit
    form.addEventListener('submit', recebeEventoForm)
}
init();