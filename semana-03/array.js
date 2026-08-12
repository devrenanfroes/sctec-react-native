const livro1 = "Dom Casmurro";
const livro2 = "1984";
const livro3 = "O Pequeno Príncipe";
const livro4 = "Harry Potter";
const livro5 = "Clean Code";
const livro6 = "Código Limpo";
console.log("Livro:", livro1);
console.log("Livro:", livro2);
console.log("Livro:", livro3);
console.log("Livro:", livro4);
console.log("Livro:", livro5);
console.log("Livro:", livro6)


---- Código com array ----

const livros = ["Dom Casmurro", "1984", "O Pequeno Príncipe", "Harry Potter", "Clean Code", "Código Limpo"];

for (let i = 0; i < livros.length; i++) {
    console.log("Livro:", livros[i]);
    if (livros[i] === "Clean Code") {
        console.log("Livro recomendado para desenvolvedores!");
        break;
    }
}