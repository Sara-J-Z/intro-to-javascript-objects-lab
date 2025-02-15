const pokemon = require('./data.js');
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
 difficulty: "Medium"
}
// console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[58].name);
// console.log(game);
// console.log(game);



const starterPokemon = pokemon.find(pokemon => pokemon.starter === true);

game.party.push(starterPokemon);

console.log(game.party);

const charmader = pokemon.find(pokemon => pokemon.number === 4);
const squirtle = pokemon.find(pokemon => pokemon.number === 7);
const pikachu = pokemon.find(pokemon => pokemon.number === 25);

game.party.push(charmader, squirtle, pikachu);
console.log(game.party);

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log(game.gyms);

 const starter = game.party[0]; 


game.party.forEach((pokemon, index) => {
  if (pokemon.starter) { 
    console.log(`Attempting to evolve: ${pokemon.name}`);

    let evolvedPokemon;
    
    switch (pokemon.number) {
      case 1: // Bulbasaur
        evolvedPokemon = { number: 2, name: "Ivysaur", type: "Grass/Poison", hp: 60, starter: false };
        break;
      case 4: // Charmander
        evolvedPokemon = { number: 5, name: "Charmeleon", type: "Fire", hp: 58, starter: false };
        break;
      case 7: // Squirtle
        evolvedPokemon = { number: 8, name: "Wartortle", type: "Water", hp: 59, starter: false };
        break;
      case 25: // Pikachu
        evolvedPokemon = { number: 26, name: "Raichu", type: "Electric", hp: 60, starter: false };
        break;
      default:
        console.log(`No evolution for ${pokemon.name}.`);
        return; 
    }

    
    game.party.splice(index, 1, evolvedPokemon);
  }
});


console.log(game.party);


// Exercise 8:

game.party.forEach(pokemon => {
  console.log(pokemon.name);
});

// Exercise 9: 

const starterPokemons = pokemon.filter(pokemon => pokemon.starter === true);

starterPokemons.forEach(starter => {
  console.log(starter.name);
});

// Ex.10

game.catchPokemon = function(pokemonObj) {
  
  this.party.push(pokemonObj);
};


const Butterfree = pokemon.find(pokemon => pokemon.number === 12);  
game.catchPokemon(Butterfree); 


console.log(game.party);

// Ex.11
function catchPokemon(pokemonObj) {
  
  game.party.push(pokemonObj);
  
  
  const pokeballItem = game.items.find(item => item.name === 'pokeball');
  
  
  if (pokeballItem && pokeballItem.quantity > 0) {
    pokeballItem.quantity -= 1; 
    console.log(`Caught ${pokemonObj.name}! Pokeball count is now: ${pokeballItem.quantity}`);
  } else {
    console.log(`Not enough pokeballs to catch ${pokemonObj.name}`);
  }

  
  console.log(game.items);
}
catchPokemon(pokemon[0]); 
// Ex.12

game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true; 
  }
});


console.log(game.gyms);
// Ex.13

game.gymStatus = function() {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };


  
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed += 1; 
    } else {
      gymTally.incomplete += 1; 
    }
  });

  
  console.log(gymTally);
};


game.gymStatus();

// Ex.14

game.partyCount = function() {
  
  return this.party.length;
};


console.log(game.partyCount()); 
//  
// console.log(game.party);  
// console.log(game.partyCount()); 
// Ex.15

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

console.log(game.gyms);

// Ex.16

console.log(game);

