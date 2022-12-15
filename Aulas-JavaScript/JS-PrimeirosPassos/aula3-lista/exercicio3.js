/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

// Comandos de entrada
const precoEtiqueta = 100;
const CondicaoPagamento = 5;

// Processamento/ Condicionais
if (CondicaoPagamento >= 1 && CondicaoPagamento <= 4) {
  if (CondicaoPagamento === 1) {
    const precoAPagar = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log(
      "Condição escolhida: À vista no débito. \n Total a pagar: R$",
      precoAPagar.toFixed(2)
    );
  } else if (CondicaoPagamento === 2) {
    const precoAPagar = precoEtiqueta - (precoEtiqueta * 0.15);
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
    const precoAPagar = precoEtiqueta * 1.1;
    console.log(
      "Condição escolhida: No crédito acima de duas parcelas. \n Total a pagar: R$",
      precoAPagar.toFixed(2)
    );
  }
} else {
  console.log("Por favor, digite um código válido.");
}
