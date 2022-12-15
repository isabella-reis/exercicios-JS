/*Faça um programa para calcular o valor de viagem.

Teremos 3 variáveis: 
- precoCombustivel
- kmPorLitroDeCombustivel
- kmDeDistancia

Imprima o valor que será gasto de combustível para realizar a viagem.
*/

const precoCombustivel = 5.79;
const gastoMedioDeCombustivel = 12 // L/km;
const distanciaKmViagem = 1580 //km;

let valorTotalViagem = precoCombustivel * (distanciaKmViagem / gastoMedioDeCombustivel);

console.log("O valor total da sua viagem é de: ",valorTotalViagem.toFixed(2));
