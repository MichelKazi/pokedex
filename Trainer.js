class Pokemon {
    constructor(name) {
        this.name = name
        this.weight = 0
        this.hp = 0
        this.attack = 0
        this.defense = 0
        this.abilities = []
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
                const pokemonToAdd = new Pokemon(acquiredPokemon.name)
                pokemonToAdd.weight = acquiredPokemon.weight
                pokemonToAdd.hp = acquiredPokemon.stats[5].base_stat
                pokemonToAdd.attack = acquiredPokemon.stats[4].base_stat
                pokemonToAdd.defense = acquiredPokemon.stats[3].base_stat
                pokemonToAdd.abilities = acquiredPokemon.abilities.map( abilities => {
                    return abilities.ability.name.replace('-', ' ')
                })
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
