class Conta {
  titular = "";
  saldo = "";
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
}

const contaAna = new Conta("Ana", 100);
const contaBruno = new Conta("Bruno", 500);
contaAna.depositar(50);
contaBruno.depositar(500);

console.log(contaAna);
console.log(contaBruno);