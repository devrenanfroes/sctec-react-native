const precos = [
  49.90, 129.90, 39.90, 259.90, 15.50, 89.90, 199.90, 320.00, 45.00, 12.90,
  67.80, 145.00, 22.50, 399.90, 78.90, 33.20, 210.00, 56.70, 99.00, 149.90,
  8.90, 275.00, 61.40, 118.60, 29.90, 450.00, 74.50, 19.90, 165.30, 38.00
];

const produtosComDesconto= precos.map((preco) => {
  return preco * 0.80;
});

const produtosPopulares = precos.filter((preco) => {
  return preco >= 30 && preco <= 150;
});

const produtoPremium = precos.find((preco) => {
  return preco > 300;
});

console.log(produtosComDesconto);
console.log(produtosPopulares);
console.log(produtoPremium);
