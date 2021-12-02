// ajax
// requisições asyncronas

fetch('pagina1.html').then(resposta => {
    if (resposta.status !== 200) {
        throw new Error('ERRO 404');
    }
    return resposta.text();
}).then((html) => {
    console.log(html)
}).catch(e => console.log(e));

// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true)
//         xhr.send();
//
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.statusText)
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    // try {
    //     const response = await fetch(href);
    //     const html = await response.text();
    //     carregaResultado(html)
    // } catch (e) {
    //     console.log(e)
    // }
    fetch(href).then(response => response.text())
    .then((texto) => carregaResultado(texto))
    .catch(e => console.log(e));
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}