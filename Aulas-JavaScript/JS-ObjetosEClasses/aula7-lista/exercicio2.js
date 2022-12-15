/*
    1. Crie uma classe para representar pessoas. Cada pessoa possui:
        - Nome;
        - Peso;
        - Altura;
    As pessaoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamda José, que tenha 70kg e 1.75m, peça ao Jo´se para dizer seu IMC.
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / Math.pow(this.altura, 2);
  }
  dizerIMC() {
    return `Meu IMC é: ${this.calcularIMC()}`;
  }

  classificarIMC() {
    const IMC = this.calcularIMC();
    if (IMC < 18.5) {
      return `Índice de Massa Corporal: ${IMC.toFixed(2)} -> ABAIXO DO PESO.`;
    } else if (IMC >= 18.5 && IMC < 25) {
      return `Índice de Massa Corporal: ${IMC.toFixed(2)} -> PESO NORMAL.`;
    } else if (IMC >= 25 && IMC < 30) {
      return `Índice de Massa Corporal: ${IMC.toFixed(2)} -> ACIMA DO PESO.`;
    } else if (IMC >= 30 && IMC < 40) {
      return `Índice de Massa Corporal: ${IMC.toFixed(2)} -> OBESIDADE.`;
    } else {
      return `Índice de Massa Corporal: ${IMC.toFixed(2)} -> OBESIDADE GRAVE.`;
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classificarIMC());
