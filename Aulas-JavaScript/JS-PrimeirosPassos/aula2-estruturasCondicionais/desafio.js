/*
Faça um programa para calcular o valor de uma viagem.

Voce terá 3 variáveis:
- Preço do etanol;
- Preço da gasolina;
- O tipo de combustível que o carro usa;
- Gasto médio de combustivel do carro por km (km/l);
- Distância em Km da viagem;

Imprima no console quanto será gasto para abastecer o carro afim de completar a viagem.
*/

// Variáveis de Entrada
const precoEtanol = 4.79;
const precoGasolina = 5.79;
const combustivel = "gasolina";
const gastoMedioDeCombustivel = 10; // km/l
const distanciaKmViagem = 200;

//Condicionais
if (combustivel === "gasolina" || combustivel === "etanol") {
    if (combustivel === "gasolina") {
        const totalNecessarioAbastecer = precoGasolina * (distanciaKmViagem / gastoMedioDeCombustivel);
        console.log("Será necessário abastecer R$ ",totalNecessarioAbastecer.toFixed(2));
    } 
    else if (combustivel === "etanol") {
        const totalNecessarioAbastecer = precoEtanol * (distanciaKmViagem / gastoMedioDeCombustivel);
        console.log("Será necessário abastecer R$ ",totalNecessarioAbastecer.toFixed(2));
    }
} else {
    console.log("Abastecer com combustível compatível.");
}


