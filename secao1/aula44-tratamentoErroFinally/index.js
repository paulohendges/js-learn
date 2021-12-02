try {
    console.log('abrir um arquivo');
    console.log('deu erro');
    console.log('fechei o arquivo');

    try {
        console.log(qweqw);
    } catch (e) {
        console.log('tratar o erro');
    } finally {
        console.log('sempre será executado 1');
    }

} catch (e) {
    console.log('tratar o erro');
} finally {
    console.log('sempre será executado 2');
    console.log('fechar o arquivo');
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date');
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
} catch (e) {
    console.log(e)
} finally {
    console.log('bla');
}


const hora = retornaHora();
console.log(hora);