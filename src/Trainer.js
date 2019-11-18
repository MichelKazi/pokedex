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
        const req = new XMLHttpRequest()
        req.onreadystatechange = _ => {
            if (req.readyState === 4 && req.status === 200) {
                const acquiredPokemon = JSON.parse(req.responseText)
                const stats = {
                    weight : acquiredPokemon.weight,
                    hp : acquiredPokemon.stats[5].base_stat, // For every single Pokemon JSON, 
                    attack : acquiredPokemon.stats[4].base_stat, // these indices for stats will
                    defense : acquiredPokemon.stats[3].base_stat, // always be the same 
                    abilities : acquiredPokemon.abilities.map( abilities => {
                        return abilities.ability.name.replace('-', ' ')
                    })    
                }// stats is an object literal that is meant to be the second parameter for Pokemon class
                // I can create new keys and values right in this object and assign information from the 
                // JSON file to them
                const pokemonToAdd = new Pokemon(acquiredPokemon.name, stats)
                pokemonToAdd.spriteURL = acquiredPokemon.sprites.front_default
                this.pokemonList.push(pokemonToAdd)
            } else if (req.status === 404) console.log(`${input} was not a valid entry!`) 
        }
        isNaN(input) ? req.open('GET', `https://fizal.me/pokeapi/api/v2/name/${input}.json`) : req.open('GET', `https://fizal.me/pokeapi/api/v2/id/${input}.json`)
        req.send()
        return isNaN(input) ? `${input} was added to ${this.name}'s list of pokemon!` : `Pokemon with ID: ${input} was added to ${this.name}'s list of pokemon!`
    }

}

