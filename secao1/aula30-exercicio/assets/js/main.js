const dataHoraAtual = new Date(Date.now());
const conteudo = document.querySelector('#conteudo');

const diaSemana = getDiaSemana(dataHoraAtual.getDay());
const nomeDia = getDiaMes(dataHoraAtual.getDate())
const nomeMes = getMes(dataHoraAtual.getMonth());
const hora = formataHoraMinutoSegundo(dataHoraAtual.getHours());
const minuto = formataHoraMinutoSegundo(dataHoraAtual.getMinutes());

const dataHoraAtualCompleta = `${diaSemana}, ${nomeDia} de ${nomeMes} de ${dataHoraAtual.getFullYear()} ${hora}:${minuto}`;
conteudo.innerHTML = dataHoraAtualCompleta;

console.log(dataHoraAtual.getDate(), dataHoraAtual.getMonth());

function getDiaSemana(dia) {
    const diasSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'
    ];
    return diasSemana[dia];
}

function getMes(mes) {
    const mesesAno = [
        'janeiro', 'fevereiro', 'abril', 'março', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return mesesAno[mes]
}

function getDiaMes(dia) {
    return dia >= 10 ? dia.toString() : `0${dia}`
}

function formataHoraMinutoSegundo(horaMinutoOuSegundo) {
    return horaMinutoOuSegundo >= 10 ? horaMinutoOuSegundo.toString() : `0${horaMinutoOuSegundo}`
}

// forma mais facil de fazer tudo de forma automática
// conteudo.innerHTML = dataHoraAtualCompleta.toLocaleUpperCase('pt-BR', { dateStyle: 'full', timeStyle: 'short' });