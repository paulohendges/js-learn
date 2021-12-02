function saudacao(nome) {
    return 'Bom dia ' + nome + '!';
}

function soma(x = 1, y = 2) {
    return x + y;
}

const variavel = saudacao('Luiz')
const resultado = soma(10, 16);
console.log(variavel)
console.log(resultado)
console.log(soma())

// funcao dentro de variavel = função anonima
const raiz = function (n) {
  return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// funcao dentro de variavel = função anonima ARROW FUNCTION
const raiz2 = n => n ** 0.5;
console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));
