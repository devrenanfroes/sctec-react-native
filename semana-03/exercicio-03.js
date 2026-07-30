function cupomValido(codigo) {
    const cuponValidos = ["PROMO10"]
    if (cuponValidos.includes(codigo)) {
        return true;
    } else {
        return false;        
    }
}

function aplicarDesconto(valor, codigo) {
    if (cupomValido(codigo)) {
        return console.log(valor - (valor * 0.1));
    } else {
        return console.log(valor);
    }
}

aplicarDesconto(100, "PROMO10");
aplicarDesconto(100, "xyz");

