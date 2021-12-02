let umaString = 'Um texto';
umaString = 'Um "texto"';
// escape de strings
umaString = "Um \"texto\"";
// uma barra invertida dentro do texto:
umaString = "Um \\texto";

// strings são iteráveis e são indexadas
//           01234567
umaString = 'Um texto'
console.log(umaString[4]);

// funcoes de strins
// charAt() -> elemento na posição tal da string
console.log(umaString.charAt(6));

// charAt() -> elemento na posição tal da string
console.log(umaString.concat(' ', 'em', ' ', 'um', '' , ' lindo dia'));

// em qual indice começa a palavra texto:
console.log(umaString.indexOf('texto'));

// encontrar palavra texto a partir de um indice
console.log(umaString.indexOf('texto', 2));

// em qual indice começa a palavra texto de trás para frente:
console.log(umaString.lastIndexOf('texto'));

// encontrar palavra texto a partir de um indice de trás para frente:
console.log(umaString.lastIndexOf('texto', 3));

// expressões regulares
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[x]/));

console.log(umaString.replace('Um', 'Outra'));

umaString = 'O rato roeu a roupa do rei de roma.';

console.log(umaString.replace(/r/g, '#'));

//tamanho da string
console.log(umaString.length);

// slice -> fatias -> rato
console.log(umaString.slice(2, 6));
// de trás para frente
console.log(umaString.slice(-5, umaString.length - 1));
console.log(umaString.substring(umaString.length - 5, umaString.length -1));

// divisão de strings
console.log(umaString.split(' '));

// maiusculas
console.log(umaString.toUpperCase());

// minusculas
console.log(umaString.toLowerCase());


