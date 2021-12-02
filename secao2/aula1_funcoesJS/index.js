// declaração de função (function hoisting)
// poder chamar antes da declaração
// serão elevadas pelo motor do javascript
falaOi();
function falaOi() {
    console.log('oie')
}

// funções são objetos de primeira classe
const nome = 'Luiz';
const funcao = function () {
    console.log('sou um dado');
}
funcao();
executaFuncao(funcao)

function executaFuncao(funcao) {
    funcao();
}


// arrow function EES6
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};

funcaoArrow();

// dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando');
    }
};
obj.falar();
