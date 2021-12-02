// função que chama ela mesma
function recursiva(max) {
    console.log(max);
    if (max >= 500) return;
    max++;
    recursiva(max);
}

recursiva(-10);