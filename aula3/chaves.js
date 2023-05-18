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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (chavesDoObjeto.includes("endereco")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}