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

waitFunction('Frase 1', rand(1, 3))
    .then((message) => {
        console.log(message);
        return waitFunction('Frase 2', rand(1, 3));
    }).then((message) => {
        console.log(message);
        return waitFunction('Frase 3', rand(1, 3));
    }).then((message) => {
        console.log(message);
    }).catch((e) => {
        console.log('erro: ', e);
    });
