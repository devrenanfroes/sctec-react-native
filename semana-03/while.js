


// =========================================
// DESAFIO - Sistema de Controle de Estacionamento
// =========================================

const prompt = require("prompt-sync")();

// =========================================
// FUNCIONALIDADE 1
// Registrar as vagas disponíveis
// =========================================

console.log("=== VAGAS DISPONÍVEIS ===");

let totalVagas = 20;
for (let i = 1; i <= totalVagas; i++){
    console.log(`Vaga ${i} disponível.`);
}

// TODO:
// Exiba as vagas de 1 até 20.
// Exemplo:
// Vaga 1 disponível.
// Vaga 2 disponível.
// ...


// =========================================
// FUNCIONALIDADE 2
// Entrada de veículos
// =========================================

console.log("\n=== ENTRADA DE VEÍCULOS ===");

let vagasDisponiveis = 5;

while (vagasDisponiveis > 0) {
    console.log("Veiculo estacionado.");
    vagasDisponiveis--;
    console.log(`Vagas restantes: ${vagasDisponiveis}`);
}

// TODO:
// Enquanto houver vagas disponíveis:
// - Exiba "Veículo estacionado."
// - Diminua uma vaga disponível.
// - Mostre quantas vagas ainda restam.

// Quando todas as vagas forem ocupadas:
console.log("Estacionamento lotado!");

// =========================================
// FUNCIONALIDADE 3
// Menu do sistema
// =========================================

let continuar = "S";

while (continuar === "S") {
    console.log("\n- - - -  MENU - - - -");
    console.log("1 - Consultar vagas");
    console.log("2 - Registrar entrada");
    console.log("3 - Registrar saída");

    continuar = prompt("Deseja realizar outra operação? (S/N): ").toUpperCase;
}

// TODO:
// Exiba o menu pelo menos uma vez.
//
// MENU
// 1 - Consultar vagas
// 2 - Registrar entrada
// 3 - Registrar saída
//
// Depois pergunte:
// "Deseja realizar outra operação? (S/N)"
//
// Enquanto a resposta for "S",
// o menu deve aparecer novamente.

console.log("Sistema encerrado.");





