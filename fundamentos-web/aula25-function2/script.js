const pedidos = ['Pedido Teste', 'Pizza de Calabresa', 'Pizza de Quatro Queijos', 
    'Pizza de Frango com Catupiry', 'Pizza de Brigadeiro'];

    let res = document.getElementById('res');
    
function clientepedido() {
    let numeropedido = Number(document.getElementById('pedidoid').value);
    if (numeropedido >=1 && numeropedido <= 4) {
        resultado = pedidos[numeropedido];
        res.innerText = resultado;
    } else {
        res.innerText = 'Número do Pedido Inválido';
    }
}