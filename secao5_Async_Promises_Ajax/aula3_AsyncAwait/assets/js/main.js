function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitFunction(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== 'string') {
                reject('BAD VALUE');
                return;
            }
            resolve(message);
        }, time);
    });
}

async function executa() {
    try {
        const fase1 = await waitFunction('Frase 1', rand(1, 3))
        console.log(fase1);
        const fase2 = await waitFunction('Frase 2', rand(1, 3))
        console.log(fase2);
        const fase3 = await waitFunction('Frase 3', rand(1, 3))
        console.log('Terminamos na fase:', fase3);
    } catch (erro) {
        console.log(erro);
    }
}

executa();