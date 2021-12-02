const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

function buildElement(el) {
    return document.createElement(el)
}
const principal = buildElement('div');
for (let elemento of elementos) {
    const createdElement = buildElement(elemento.tag)
    createdElement.innerText = elemento.texto
    principal.appendChild(createdElement)
}
document.querySelector('section').appendChild(principal)