// Arrays = listas
// Nossas listas são dinâmicas

//Array de strings
const alunos = ["Isabella", "Rebeca", "Caio"];

//acessando nosso array pelo index
console.log(alunos);
console.log(alunos[0]); //o item de index 0;
console.log(alunos[1]);
console.log(alunos[2]);

//adicionando item no nosso array
alunos.push("Gabriel");
console.log(alunos);

//removendo item do nosos array
alunos.pop();
console.log(alunos);

//Lista de notas

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

console.log(notas.length); // nos mostra o tamanho da lista (qntd de items nela);

//Para fazer a média do aluno precisamos somar todos os itens da lista e dividir pelo length dela
//dai entramos nas estruturas de repetição (loops)

//for percorre algo uma qntd X de vezes
//costumamos começar com zero pois geralmente estamos iterando uma lista e as listas começam na posição 0;
//depois temos nossa estrutura condicional
//por fim temos nosso incremento/decremento
let soma = 0; //criamos uma variavel para somar (é o nosso contador) e a cada passada no for, a gente incrementa ele com ele + uma nota
for (let index = 0; index < notas.length; index++) {
  const nota = notas[index];
  soma += nota;
}
console.log((soma/notas.length).toFixed(2));
