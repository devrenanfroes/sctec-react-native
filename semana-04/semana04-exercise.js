const produtos = ["Mouse", "Teclado", "Monitor", "Notebook", "Headset"];

const precos = [80, 150, 950, 4200, 320];

const nomesProdutos = produtos.map((produto, index) => {
    return `${produto.toUpperCase()}`;
});

const produtosMaioresQueTrezentos = produtos.filter((produto, index) => {
    return precos[index] > 300;
});

const produtosComPreco = produtos.filter((produto, index) => {
    return precos[index];
});

const produtosNotebook = produtos.find((produto) => {
    return produto === "Notebook";
});
