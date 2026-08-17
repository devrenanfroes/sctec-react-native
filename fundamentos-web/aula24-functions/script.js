function mostrarSaudacao(){
    let nome = document.getElementById('nome').value;
    let hora = parseInt(document.getElementById('hora').value);
    let msg = document.getElementById('mensagem');
    console.log(hora)

    if (hora < 12 ) {
        msg.innerText = `Oi, ${nome}. Bom Dia!`
    }
    else if (hora < 18){
        msg.innerText = `Oi, ${nome}. Boa Tarde!`
    } else {
        msg.innerText = `Oi, ${nome}. Boa Noite!`
    }
}
