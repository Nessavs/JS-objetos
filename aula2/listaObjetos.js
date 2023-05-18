const cliente = {
    nome: "Joao",
    idade: 24,
    email:"joao@firma.com",
    telefone: ["11892839", "112389838"]
};

cliente.endereco = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];

cliente.endereco.push({
    rua: "R.Joseph Ladder",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento == true
);

console.log(listaApenasApartamentos);