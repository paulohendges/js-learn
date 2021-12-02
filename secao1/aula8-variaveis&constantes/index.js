/**
 * Luiz otávio miranda tem 30 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924
 */
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 32;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

const anoAtual = new Date().getFullYear();
imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;

// concatenando com ,
console.log(nome, sobrenome, 'nasceu em', anoNascimento, 'tem', idade, 'anos, pesa', peso, 'kg\'s');
console.log('tem', altura, 'de altura e seu IMC é de', imc);

// concatenando com +
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento + ' tem ' + idade + ' anos, pesa ' + peso + ' kg\'s ');
console.log('tem ' + altura + ' de altura e seu IMC é de ' + imc);

// concatenando com template strings
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} tem ${idade} anos, pesa ${peso} kg's`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);