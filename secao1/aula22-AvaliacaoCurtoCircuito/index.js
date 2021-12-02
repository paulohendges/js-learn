/**
 * && -> false && true -> false
 * || -> OR -> OU
 * ! -> NOT -> NAO
 */

// qualquer um desses é identificado como false no js
// FALSY
// 0
// ''
// ""
// ``
// null / undefined
// NaN

console.log('Luiz Otávio' && 'Maria' && NaN); // true

function falaOI() {
    return 'oi';
}

// exemplo com AND
const vaiExecutar = 0;
console.log(vaiExecutar && falaOI());


// exemplo com OR
console.log(0 || false || null || 'Luiz Otávio' || true);
let corUsuario = null;
// corUsuario = 'green';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
