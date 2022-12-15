/*
1. Criamos uma função para calcular o IMC;
2. Isolamos a classificação do nosso IMC e retornamos cada classificação;
*/

// Funções auxiliares
function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
  if (IMC < 18.5) {
    return `Índice de Massa Corporal: ${IMC.toFixed(1)} -> ABAIXO DO PESO.`;
  } else if (IMC >= 18.5 && IMC < 25) {
    return `Índice de Massa Corporal: ${IMC.toFixed(1)} -> PESO NORMAL.`;
  } else if (IMC >= 25 && IMC < 30) {
    return `Índice de Massa Corporal: ${IMC.toFixed(1)} -> ACIMA DO PESO.`;
  } else if (IMC >= 30 && IMC < 40) {
    return `Índice de Massa Corporal: ${IMC.toFixed(1)} -> OBESIDADE.`;
  } else {
    return `Índice de Massa Corporal: ${IMC.toFixed(1)} -> OBESIDADE GRAVE.`;
  }
}

// Função principal (main)
// Podemos envolver a função em parenteses e logo em seguida invocar ela com outro set de parenteses
// O nome disso é função imediatamente invocada
// Podemos até tirar o nome da função. Ela só existe dentro desses parênteses.
// Não podemos chamar ela por fora pois não temos mais uma variável para referenciar ela

(function () {
  const peso = 65; // em Kg
  const altura = 1.7; // em metros

  const IMC = calcularIMC(peso, altura);
  console.log(classificarIMC(IMC));
})();

