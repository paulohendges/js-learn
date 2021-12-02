const numero  = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero.toString() + '!';
texto.innerHTML = `<p>Raiz quadrada do seu número é ${ (numero ** 0.5) }</p>`;
texto.innerHTML += `<p>Seu número é inteiro ? ${ Number.isInteger(numero) }</p>`;
texto.innerHTML += `<p>Seu número é NaN ? ${ Number.isNaN(numero) }</p>`;
texto.innerHTML += `<p>Seu número arredondado para baixo é ${ Math.floor(numero) }</p>`;
texto.innerHTML += `<p>Seu número arredondado para cima é ${ Math.ceil(numero) }</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais ${ numero.toFixed(2) }</p>`;

