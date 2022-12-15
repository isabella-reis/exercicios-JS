/*
1. Criamos uma função para aplicar os descontos;
    - Nossa função recebe o valor do produto e o desconto que deve ser aplicado;
    - PS.: o valor do produto é o preco de etiqueta dele;

*/

// Comandos de entrada
const precoEtiqueta = 100;
const CondicaoPagamento = 4;

function aplicarDesconto(valorProduto, desconto) {
  return valorProduto - (valorProduto * (desconto / 100));
}

function aplicarJuros(valorProduto, juros) {
  return valorProduto + (valorProduto * (juros / 100));
}

// Processamento/ Condicionais
if (CondicaoPagamento >= 1 && CondicaoPagamento <= 4) {
  if (CondicaoPagamento === 1) {
    const precoAPagar = aplicarDesconto(precoEtiqueta, 10);
    console.log(
      "Condição escolhida: À vista no débito. \n Total a pagar: R$",
      precoAPagar.toFixed(2)
    );
  } else if (CondicaoPagamento === 2) {
    const precoAPagar = aplicarDesconto(precoEtiqueta, 15);
    console.log(
      "Condição escolhida: À vista em dinheiro ou PIX. \n Total a pagar: R$",
      precoAPagar.toFixed(2)
    );
  } else if (CondicaoPagamento === 3) {
    console.log(
      `Condição escolhida: No crédito em duas vezes sem juros. \n Total a pagar: 2x de R$ ${(
        precoEtiqueta / 2
      ).toFixed(2)}`
    );
  } else {
    const precoAPagar = aplicarJuros(precoEtiqueta, 10);
    console.log(
      "Condição escolhida: No crédito acima de duas parcelas. \n Total a pagar: R$",
      precoAPagar.toFixed(2)
    );
  }
} else {
  console.log("Por favor, digite um código válido.");
}
