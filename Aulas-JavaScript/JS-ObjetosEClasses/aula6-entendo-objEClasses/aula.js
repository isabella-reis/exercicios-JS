// Objeto é uma coleção de valores;
// Coleção dinâmica de chave-valor

const isabolla = {
  nome: "Isabella N Reis",
  idade: 22,
};

console.log(isabolla.nome);
console.log(isabolla.idade);
console.log(isabolla);

// Podemos incremetar os objetos de forma dinâmica
isabolla.altura = 1.57;
console.log(isabolla);

// Também podemos deletar
delete isabolla.altura;
console.log(isabolla);

// Podemos utilizar funções dentro de objetos --> as chamamos de métodos;
const pessoas = {
  nome: "Isabella N Reis",
  idade: 22,
  descricao: function () {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos :)`);
  },
};

pessoas.descricao();

pessoas.nome = "Caio";
pessoas.idade = 23;

pessoas.descricao();

// Acessando os valores através de uma sintaxe dinâmica:
// através de uma string podemos acessar diretamente nossos atributos

const atributo = "nome";
console.log(pessoas[atributo]); // é a mesma coisa que: console.log(pessoas['nome']);

// e podemos reatribuir
pessoas["nome"] = "Phos"; // que é a mesma coisa que pessoas.nome = 'Phos';
console.log(pessoas.nome);

// Podemos usar esse acesso dinâmico pois com o acesso direto é necessário saber os nomes dos atributos;

// Para reutilizar o modelo de pessoa, podemos criar a classe pessoa!!!
// A classe Pessoa vai definir como são pessoas para que elas possam ser instânciadas;
// Uma pessoa precisa de X coisas para existir, certo? Vamos definir isso.
// Classe é uma definição do que uma pessoa deve ser
// Instância é uma ocorrencia de uma pessoa
// Classe = Nome, idade, descrição e instância = isabella, 21, blablabla

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  // Sempre que uma pessoa for instânciada ela vai passar pelo nosso construtor;
  // Podemos passar para o construtor como parametro o que uma pessoa PRECISA para ser instanciada, e ele nao vai nos deixar
  //instanciar novas pessoas sem aqueles parâmetros
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever(params) {
    //não precisa colocar a "function"
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos :)`);
  }
}

/*
const isabella = new Pessoa();
isabella.nome = "Isabella N. Reis";
isabella.idade = 21;

const caio = new Pessoa();
caio.nome = "Caio M. Freire";
caio.idade = 23;

E ao invés de instanciar pessoas assim, podemos simplesmente:
*/
const isabella = new Pessoa('Isabella N Reis', 22);
const caio = new Pessoa('Caio M Freire', 23);

console.log(isabella);
console.log(caio);
isabella.descrever();
caio.descrever();
