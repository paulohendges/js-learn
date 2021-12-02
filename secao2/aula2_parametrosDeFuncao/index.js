/// zuera total
function funcaoComParametrosZuada() {
    console.log(arguments)
}
funcaoComParametrosZuada(123, 123, 322, 'sqweqwe');

// zuera total, não da erro
function funcaoComParametrosZuada2(a, b, c) {
    console.log(a, b, c, arguments)
}
funcaoComParametrosZuada('a', 'b', 'c', 'parametroPerdido');

