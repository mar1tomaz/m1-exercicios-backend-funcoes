
function imprimirResumoDoCarrinho(carrinho) {
    let quantidade = 0;
    let valor = 0;

    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    for (produto of carrinho.produtos) {
        quantidade += produto.qtd;
    }
    console.log(`Total de itens: ${quantidade}`);
    for (produto of carrinho.produtos) {
        valor += valor += produto.qtd * produto.precoUnit;
    }
    console.log(`Total a pagar: R$ ${(valor / 100).toFixed(2)}.`);
};

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
};
imprimirResumoDoCarrinho(carrinho);