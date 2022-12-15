// os () levam os parâmetros
function sayAName(name) {
  console.log(`Hi! Is your name ${name}?`);
}

sayAName("Isabella");
sayAName("Isabollinha");
// Invocando função para ela funcionar, posso invocar quantas vezes quiser;

// funções com contas para serem reutilizadas
function sqrt(valor) {
    return Math.pow(valor, 2); //return para devolver o valor quando a func for chamada;
}

const sqrtDez = sqrt(10);
console.log(sqrtDez);


// temos uma função que recebe dois paramentros, dentro dela temos uma const que calcula
// o valor a ser incrementado com base no 2º param passado
// e a nossa função retorna para nós a somatória do valor base e os juros
function incrementarJuros(valorBase, percentualJuros) {
    const valorAIncrementar = (percentualJuros / 100) * valorBase;
    return valorBase + valorAIncrementar;
}

console.log(incrementarJuros(1200, 15));


// Nosso código principal sempre será colocado dentro uma função principal
function main() {
    console.log("Oi! Eu sou sua main function.");
}
main();
// Nossas outras funções serão funcções criadas quando precisarmos reutilizar códigos, como contas e etc
