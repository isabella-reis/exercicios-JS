const pokemonList = document.getElementById("pokemonList");
const loadmoreButton = document.getElementById("loadMoreButton");
const limit = 10;
let offset = 0;
const maxRecords = 386;

function loadPokemonItens(offset, limit) {
  //função para converter nossa lista de pokemons em uma list HTML
  function convertPokemonToLi(pokemon) {
    return `
      <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="details">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img
          src="${pokemon.photo}"
          alt="${pokemon.name}"
        />
      </div>
    </li>
      `;
  }
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    //Pega a lista de pokemons, mapeia ela e converte para um li de html
    //Depois junta todos os li e concatena no nosso html
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
  }); //o que ele devolveu no then do poke-api.js vai vir pra cá como pokemonList
}

loadPokemonItens(offset, limit);

loadmoreButton.addEventListener("click", () => {
  offset += limit;
  const amtRecordsWithNextPage = offset + limit;

  if (amtRecordsWithNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadmoreButton.parentElement.removeChild(loadmoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});


// pokemonList.addEventListener('click', () =>{
//   return `<div class="modal-body">
//   <div class="container-fluid">
//     <div class="row">
//       <div class="col-md-4">.col-md-4</div>
//       <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
//     </div>
//     <div class="row">
//       <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
//       <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
//     </div>
//     <div class="row">
//       <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
//     </div>
//     <div class="row">
//       <div class="col-sm-9">
//         Level 1: .col-sm-9
//         <div class="row">
//           <div class="col-8 col-sm-6">
//             Level 2: .col-8 .col-sm-6
//           </div>
//           <div class="col-4 col-sm-6">
//             Level 2: .col-4 .col-sm-6
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>`//quero adicionar um popup para ver a page dos details do pokemon
// })