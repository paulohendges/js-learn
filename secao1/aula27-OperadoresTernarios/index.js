// ? :
const pontuacao = 999;
const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
if (pontuacao >= 1000) {
    console.log('usuario vip');
}

const corUsuario = null;
// const corUsuario = 'red';
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);