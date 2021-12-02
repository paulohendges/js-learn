// fazer as variaveis mutarem seus valores de acordo com as suas referencias:
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const refereciaVarA = varA;
// varA = varB;
// varB = varC;
// varC = refereciaVarA;

// atribuição de variáveis em massa:
[varA, varB, varC] = [varB, varC, varA];

console.log(refereciaVarA);
console.log(varA, varB, varC);