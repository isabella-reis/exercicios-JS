//Variaveis do tipo boolean

const camisetaPreta = true;
const camisetaRosa = false;

//Condicional verifica se a situação é verdadeira ou falsa

console.log(10 > 5); //True

let numero = 10;
const numeroPar = (numero % 2) === 0; // Se não sobrar resto na divisão é par
const numeroImpar = (numero % 2) === 1; // Se sobrar resto na divisão é impar
console.log(numeroPar);
console.log(numeroImpar);

let numero2 = 0;
const divisivelPor5 = (numero % 5) === 0;

//Condicionais simples

if (numeroPar) { //como nossa const já está verificando se é true ou false, não precisamos fazer uma comparação aqui
    console.log('verdadeiro');
}
else {
    console.log('falso');
}

//Condicional else if
if (numero2 === 0) {
    console.log("Numero inválido.")
}
else if (divisivelPor5) { 
    console.log('Numero é divisivel por 5');
}
else {
    console.log('Numero não é divisivel por 5');
}
