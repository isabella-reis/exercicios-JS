/*
    1. Cria uma classe para representar carros. Os carros possuem:
        - marca;
        - cor;
        - gasto médio de combustível por km rodado (km/l).
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar esste percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm; //quantos litros ele gasta por Km? com 1 litro ele faz X km, então 1km/X km que ele faz com 1 litro

    constructor(marca, cor, gastoMedioPorKm){ // sempre que criar um carro, é obrigatório informar isso
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoTotalEmReaisPercurso (distanciaEmKm, precoCombustivel) { //métodos são feitos dentro dos nossos objetos
        return `R$ ${(distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel}`;
    }
    
}

//criando um corsinha e um palio
const corsa = new Carro('Chevrolet', 'Azul', 1/12.8);
console.log(corsa.calcularGastoTotalEmReaisPercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoTotalEmReaisPercurso(70, 5));






