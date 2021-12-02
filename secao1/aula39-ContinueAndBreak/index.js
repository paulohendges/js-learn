const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// pula para proxima iteração
for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        continue;
    }
    console.log(numero)
}

// sai do laço
for (let n of numeros) {
    if (n === 7) {
        break;
    }
    console.log(n)
}