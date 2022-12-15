const { gets, print } = require("./funcoes-auxiliares");

/*
Uma sala cotém 5 alunos e para cada aluno foi sorteado um numero entre 1 e 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada: 5, 50, 10, 98, 23;
Dados de saída: 98;
*/

//Para os exercicios da DIO, quem precisa dar a saída é a função gets();

//Lá nas nossas funções auxiliares:
//1. vamos criar um array com os numeros que devem sair;
//const entradasSorteadas = [5, 50, 10, 98, 23];
//2. vamos criar um contador de chamadas;
//let i = 0;
//3. agora aqui no exercicio nós vamos chamar nossa gets() na quantidade de vezes do nosso array
//4. vamos alocar em uma variável as chamadas da gets();
//5. vamos, com cada resultado de gets(), push eles para dentro do nosso array de sorteados;

const numerosSorteados = [];

for (i = 0; i < 5; i++) {
  const numero = gets();
  numerosSorteados.push(numero);
}
print(numerosSorteados);

//6. queremos achar o maior valor, então vamos criar uma var que recebe o maior valor;
//7. vamos criar um for, que vai perdurar pelo tamanho do array;
//8. para cada item do array, vamos verificar se ele é maior que o maiorValor;
//se ele for maior, ele vira nosso novo maiorValor.

let maiorValor = -1;
for (let i = 0; i < numerosSorteados.length; i++) {
  const numero = numerosSorteados[i];
  if (numero > maiorValor) {
    maiorValor = numero;
  }
}
print(maiorValor);
