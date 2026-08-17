function traduzir(){
    let idioma = document.getElementById('idiomas').value;
    let saudacao;
    switch(idioma){
        case 'english':
            saudacao = "Good Morning";
            break;
        case 'portuguese':
            saudacao = "Bom dia";
            break;
        case 'spanish':
            saudacao = "Buenos Dias";
            break;
        default:
            document.getElementById('traducao').innerHTML = "Houve algum erro...";
    }
    document.getElementById('traducao').innerHTML = saudacao;
}