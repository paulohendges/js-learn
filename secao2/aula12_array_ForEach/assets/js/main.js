// só esta disponivel em arrays
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 0 ];
let total = 0;
a1.forEach((valor, index, array) => {
    total += valor;
});
console.log(total);