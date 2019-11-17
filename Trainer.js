class Pokemon {
    constructor(name, stats) {
        this.name = name
        this.stats = stats
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
            if (req.readyState === 4) {
                const acquiredPokemon = JSON.parse(req.responseText)
                const stats = {
                    weight : acquiredPokemon.weight,
                    hp : acquiredPokemon.stats[5].base_stat,
                    attack : acquiredPokemon.stats[4].base_stat,
                    defense : acquiredPokemon.stats[3].base_stat,
                    abilities : acquiredPokemon.abilities.map( abilities => {
                        return abilities.ability.name.replace('-', ' ')
                    })    
                }
                const pokemonToAdd = new Pokemon(acquiredPokemon.name, stats)
                this.pokemonList.push(pokemonToAdd)
                return true
            }
        }
        isNaN(input) ? req.open('GET', `https://fizal.me/pokeapi/api/v2/name/${input}.json`) : req.open('GET', `https://fizal.me/pokeapi/api/v2/id/${input}.json`)
        req.send()
        return isNaN(input) ? `${input} was added to ${this.name}'s list of pokemon!` : `Pokemon with ID: ${input} was added to ${this.name}'s list of pokemon!`
    }

}
const michel = new Trainer('Michel')
