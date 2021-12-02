const pessoas = [
    {
        id: 1, nome: 'Helena'
    },
    {
        id: 3, nome: 'Luiz'
    },
    {
        id: 2, nome: 'Maria'
    },
];

// const novasPessoas = {};
//
// for (const {id, nome} of pessoas) {
//     novasPessoas[id] = {id, nome};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa })
}

novasPessoas.keys();
novasPessoas.values();
novasPessoas.entries();
novasPessoas.delete(1);
console.log(novasPessoas);