/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

// Comandos de entrada
const nota1 = 4;
const nota2 = 6;
const nota3 = 7;

// Processamento
const media = (nota1 + nota2 + nota3) / 3;

// Condicionais/ comandos de saída
if (media < 5) {
  console.log(`Sua média é ${media.toFixed(2)} .: REPROVADO.`);
} else if (media >= 5 && media <= 7) {
  console.log(`Sua média é ${media.toFixed(2)} .: RECUPERAÇÃO.`);
} else {
  console.log(`Sua média é ${media.toFixed(2)} .: APROVADO.`);
}
