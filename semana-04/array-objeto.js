async function buscarUsuarios() {
    const response = await fetch("https://dummyjson.com/users");

    const dados = await response.json();

    return dados.users;
}

async function main() {
    const usuarios = await buscarUsuarios();
    // 1 - Percorra todos os usuários e exiba no terminal as seguintes informações:
    // Nome: Emily Johnson
    // Idade: 28 anos
    // E-mail: emily.johnson@x.dummyjson.com

    console.log("Informações dos usuários:");
    usuarios.forEach((usuario) => {
        console.log(`Nome: ${usuario.firstName} ${usuario.lastName}`);
        console.log(`Idade: ${usuario.age} anos`);
        console.log(`E-mail: ${usuario.email}`);
        console.log("-------------------------");
    });

    // 2 - Crie um novo array contendo apenas o nome completo de cada usuário.
    const nomesCompletos = usuarios.map((usuario) => `${usuario.firstName} ${usuario.lastName}`);
    console.log("Nomes completos dos usuários:");
    console.log(nomesCompletos);

    // 3 - Crie um novo array contendo apenas os usuários com idade igual ou superior a 30 anos.Depois exiba o resultado no terminal.
    const usuariosComMaisDe30 = usuarios.filter((usuario) => usuario.age >= 30);
    console.log("Usuários com idade igual ou superior a 30 anos:");
    console.log(usuariosComMaisDe30);

    // 4 - Encontre o usuário cujo primeiro nome seja: Emily(Exiba apenas esse usuário no terminal)
    const emily = usuarios.find((usuario) => usuario.firstName === "Emily");
    console.log("Usuário com o primeiro nome 'Emily':");
    console.log(emily);

    // 5 - Verifique se existe algum usuário com idade inferior a 18 anos. (Exiba: true ou false no terminal)
    let existeUsuarioMenorDe18 = false;

    for (const usuario of usuarios) {
        if (usuario.age < 18) {
            existeUsuarioMenorDe18 = true;
            break;
        }
    }
    console.log(`Existem usuários menor de 18? ${existeUsuarioMenorDe18}`);

    // 6 - Verifique se todos os usuários possuem endereço de e - mail preenchido.
    const todosPossuemEmail =
        usuarios.filter((usuario) => !usuario.email).length === 0;
    console.log(`Todos possuem email? ${todosPossuemEmail}`);

    // 7 - Calcule a soma de todas as idades dos usuários.
    const somaDasIdades = usuarios.reduce((soma, usuario) => soma + usuario.age, 0);
    console.log(`Soma de todas as idades dos usuário: ${somaDasIdades}`);

    // 8 - Desafio Calcule a idade média dos usuários.Exemplo: Idade média: 37.8 anos Utilize o método reduce().
    const idadeMedia = usuarios.reduce((soma, usuario) => soma + usuario.age, 0) / usuarios.length;
    console.log(`Idade média dos usuários: ${idadeMedia.toFixed(0)}`);
}
main();