// try {
//     console.log(naoExisto);
// } catch (e) {
//     console.log('nao existo não existe');
// };

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('x e y precisam ser numeros');
  }
  return x + y;
}

try {
    console.log(soma('qwe', 2));
} catch (e) {
    console.log(e);
}
