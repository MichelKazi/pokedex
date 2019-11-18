import Axios from 'axios'

class Pokemon {
    constructor(name, stats) {
        this.name = name
        this.stats = stats
        // since the pokemon is meant to be instantiated through Trainer's addPokemon method
        // I have no need to add keys and instantiate them to overwrite them later
    }

}

class Trainer {
    constructor(name) {
        this.name = name
        this.pokemonList = []
    }
    all () {
        return this.pokemonList
    }
    addPokemon(input) {
        const acquiredPokemon = this.fetchPokeAPI(input)
        const stats = {
            weight : acquiredPokemon.weight,
            hp : acquiredPokemon.stats[5].base_stat, // For every single Pokemon JSON, 
            attack : acquiredPokemon.stats[4].base_stat, // these indices for stats will
            defense : acquiredPokemon.stats[3].base_stat, // always be the same 
            abilities : acquiredPokemon.abilities.map( abilities => {
                return abilities.ability.name.replace('-', ' ')
            })    
        }
        const pokemonToAdd = new Pokemon(acquiredPokemon.name, stats)
        pokemonToAdd.spriteURL = acquiredPokemon.sprites.front_default
        this.pokemonList.push(pokemonToAdd)

        return isNaN(input) ? `${input} was added to ${this.name}'s list of pokemon!` : `Pokemon with ID: ${input} was added to ${this.name}'s list of pokemon!`
    }

    fetchPokeAPI(input) {
        const axios = require('axios');
        // Make a request for a user with a given ID
        isNaN(input) ? axios.get(`https://fizal.me/pokeapi/api/v2/name/${input}.json`) : axios.get(`https://fizal.me/pokeapi/api/v2/id/${input}.json`)
            .then(function (response) {
                // handle success
                const acquired = response.data
                console.log(response);
                return acquired
            })
            .catch(function (error) {
                // handle error
                console.log(`${input} was not a valid entry!`)
                console.log(error);
            })
    }

}

export default Trainer
