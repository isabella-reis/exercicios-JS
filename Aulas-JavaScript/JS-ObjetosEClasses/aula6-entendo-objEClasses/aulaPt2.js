class Pessoa {
  nome;
  idade;
  anoDeNascimento;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos :)`);
  }
}

function compararPessoas(pessoa1, pessoa2) {
  if (pessoa1.idade > pessoa2.idade) {
    console.log(`${pessoa1.nome} é mais velha(o) que ${pessoa2.nome}`);
  } else if (pessoa2.idade > pessoa1.idade) {
    console.log(`${pessoa2.nome} é mais velha(o) que ${pessoa1.nome}`);
  } else {
    console.log(
      `As duas pessoas: ${pessoa2.nome} e ${pessoa1.nome} têm a mesma idade.`
    );
  }
}

const isabella = new Pessoa('Isabella', 21);
const rebeca = new Pessoa('Rebeca', 21);

compararPessoas(isabella, rebeca)