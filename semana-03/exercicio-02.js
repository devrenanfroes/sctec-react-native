const prompt = require("prompt-sync")();

function calcularCarrinho(
  precoItem1,
  precoItem2,
  cupomDesconto,
  quantidadeItens,
) {
  let total = precoItem1 + precoItem2;

  if ((cupomDesconto === "PROMO10")) {
    total = total - total * 0.1;
  }

  let freteGratis = false;
  if (quantidadeItens >= 3) {
    freteGratis = true;
  }
  if ((total >= 100)){
    freteGratis = true;
  } 

  return "Total: R$ " + total + " | Frete grátis: " + freteGratis;
}

const precoItem1Input = Number(prompt("Preço do item 1: "));
const precoItem2Input = Number(prompt("Preço do item 2: "));
const cupomInput = prompt("Cupom de desconto (ou deixe vazio): ");
const quantidadeDeItensInput = Number(prompt("Quantidade de itens: "));

console.log(
  calcularCarrinho(
    precoItem1Input,
    precoItem2Input,
    cupomInput,
    quantidadeDeItensInput,
  ),
);