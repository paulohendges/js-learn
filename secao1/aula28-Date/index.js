// a função date é uma função construtora
const tresHoras = 60 * 60 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
// const data = new Date(0); -> timestamp unix 01/01/1970

console.log(data.toString());

// meses: 0-11
const data2 = new Date(2019, 3 ,20, 15, 14, 27, 999); // a m d h m s, ms
console.log(data2)

const data3 = new Date('2019-04-20 20:20:59.150');
console.log(data3)
console.log('Dia', data3.getDate()); // dia
console.log('Mes', data3.getMonth()); // começa sempre do 0
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('dia semana', data3.getDay()); // 0 é domingo e 6 sábado

console.log(Date.now());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil)