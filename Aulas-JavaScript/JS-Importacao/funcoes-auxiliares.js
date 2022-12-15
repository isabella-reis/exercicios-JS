/* 
gets - Pega uma informação digitada;
print - dá um console.log
*/

const entradasSorteadas = [5, 50, 10, 98, 23];
let i = 0;

// Nossa gets() está alocando na var valor o elemento de index i do nosso array de entradas e logo em seguida
//ela está incrementando o index, então na próxima vez que ela é chamada, o i já foi incrementado, e ela mostra
//o próximo elemento, e assim por diante até acabar o nosso array ou a gente parar de chamar ela.
function gets() {
  const valor = entradasSorteadas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

//para exportar as funcoes, precisamos do:
module.exports = { gets, print }; // isso é um objeto literal com 2 atributos, nossas funções
