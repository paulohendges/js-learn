function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitFunction(message, time) {
    return new Promise((resolve, reject) => {
        if (typeof message !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

// Promise.all
// -> resolve todas as promises e retorna num array
const promises = [
    'Primeiro valor',
    waitFunction('Promise 1', 3000),
    waitFunction('Promise 2', 1000),
    waitFunction('Promise 3', 500),
    'Outro valor'
];

Promise.all(promises).then(valor => {
    console.log(valor)
})

// Promise.race
// -> retorna a primeira resolução de um conjunto de promises
const promises2 = [
    waitFunction('Promise 1', rand(1 , 5)),
    waitFunction('Promise 2', rand(1 , 5)),
    waitFunction('Promise 3', rand(1 , 5)),
];
Promise.race(promises2).then(valor => {
    console.log(valor)
})

// Promise.resolve
function baixaPagina() {
    const emCache = false;
    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return waitFunction('Baixei a página', 3000);
    }
}
baixaPagina().then((message) => {
    console.log(message)
})

// Promise.reject

function baixaPagina2() {
    const emCache = true;
    if (emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return waitFunction('Baixei a página', 3000);
    }
}
baixaPagina2().then((message) => {
    console.log(message)
}).catch((erro) => {
    console.log('erro', erro);
})
