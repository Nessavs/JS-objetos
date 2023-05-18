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

function ligarParaCliente(telefoneComercial,  telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

ligarParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
}; 

console.log(encomenda);