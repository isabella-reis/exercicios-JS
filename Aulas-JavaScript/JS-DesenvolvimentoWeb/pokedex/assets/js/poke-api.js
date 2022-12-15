const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.id;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  const types  = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type]= types; //mesma coisa que pokemon.types.get(0) -> Estamos pegando a 1ª posição do nosso array de types


  pokemon.types = types
  pokemon.type =  type

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 6) => {
  //Requisitar via HTTP nosso endpoint
  //vamos utilizar o Fetch API
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  //o fetch retorna uma Promise (uma promessa de um resultado)
  //diz que uma hora vamos receber a response, se der tudo certo
  //o método then processa o sucesso dessa promisse;
  //ou seja: quando o fetch der certo, então faça (nosso params, no caso, execute a nossa function)

  return fetch(url) //ao buscar nossa lista de pokemons ele retorna um response
    .then((response) => response.json()) //estamos convertendo nossa response para JSON e retornando uma promise como resposta
    .then((jsonBody) => jsonBody.results) //recebendo o body convertido e pedindo pra ele devolver só a nossa lista de pokemons (results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //estamos mapeando nossa lista de pokemons em uma lista de requisições dos detalhes dos pokemons
    .then((detailRequests) => Promise.all(detailRequests)) //Recebe um array de promisses e espera que todas as requisições terminem
    .then((pokemonsDetails) => pokemonsDetails); //quando todas terminarem ele devolve nossa lista de detalhes certinha
};
