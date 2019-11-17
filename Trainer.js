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

    addPokemonByName(name) {
        const req = new XMLHttpRequest()
        req.onreadystatechange = _ => {
            if (req.readyState === 4) {
                const acquiredPokemon = JSON.parse(req.responseText)
                const pokemonToAdd = new Pokemon(name)
                pokemonToAdd.weight = acquiredPokemon.weight
                pokemonToAdd.hp = acquiredPokemon.stats[5].base_stat
                pokemonToAdd.attack = acquiredPokemon.stats[4].base_stat
                pokemonToAdd.defense = acquiredPokemon.stats[3].base_stat
                for (const a in acquiredPokemon.abilities){
                    const ability = acquiredPokemon.abilities[a].ability.name
                    pokemonToAdd.abilities.push(ability.replace('-', ' '))
                }
                this.pokemonList.push(pokemonToAdd)
                return true
            }
            
            
        }
        req.open('GET', `https://fizal.me/pokeapi/api/v2/name/${name}.json`)
        req.send()
        return this.pokemonList
    }

    addPokemonById(id) {
        const req = new XMLHttpRequest()
        req.onreadystatechange = _ => {
            if (req.readyState === 4) {
                const acquiredPokemon = JSON.parse(req.responseText)
                const pokemonToAdd = new Pokemon(acquiredPokemon.name)
                pokemonToAdd.weight = acquiredPokemon.weight
                pokemonToAdd.hp = acquiredPokemon.stats[5].base_stat
                pokemonToAdd.attack = acquiredPokemon.stats[4].base_stat
                pokemonToAdd.defense = acquiredPokemon.stats[3].base_stat
                for (const a in acquiredPokemon.abilities){
                    const ability = acquiredPokemon.abilities[a].ability.name
                    pokemonToAdd.abilities.push(ability.replace('-', ' '))
                }
               
                this.pokemonList.push(pokemonToAdd)
                return true
            }  
        }
        req.open('GET', `https://fizal.me/pokeapi/api/v2/id/${id}.json`)
        req.send()
        return this.pokemonList
    }
    addPokemon(input) {
        isNaN(input) ? this.addPokemonByName(input) : this.addPokemonById(input)
        return this.pokemonList
    }

}
const michel = new Trainer('Michel')
