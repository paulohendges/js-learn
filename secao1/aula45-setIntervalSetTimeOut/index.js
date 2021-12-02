function retornaHora() {
    data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    })
}

const timer = setInterval(() => {
    console.log(retornaHora())
}, 1000);


// executa uma operação em x tempo
setTimeout(() => {
    // parando a execução do intervalo de tempo
    clearInterval(timer);
}, 10000);

console.log('bla');