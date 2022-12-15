// Precismoas importar nossas funções auxiliares do outro arquivo dessa aula
// Utilizamos a fun~ção require, que vem lá do node.js
// Quando importamos uma coisa, estamos importando o que está sendo exportado de algum lugar

/*
//Desestructuring
const pessoa = {
    nome: "isabella",
  };
  
  const { nome } = pessoa; // é a mesma coisa que const nome = pessoa.nome
*/

const { gets, print } = require("./funcoes-auxiliares"); // é a mesma coisa que const funcoes = require("./funcoes-auxiliares");
//Só que o de cima está desestruturado!!!!
print(gets());

