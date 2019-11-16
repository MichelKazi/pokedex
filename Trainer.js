class Pokemon {
    constructor(name) {
        this.name = name
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
        let req = new XMLHttpRequest()
        req.onreadystatechange = _ => {
            if (req.readyState === 4) {
                let acquiredPokemon = JSON.parse(req.responseText)
                let pokemonToAdd = new Pokemon(name)
                pokemonToAdd.hp = acquiredPokemon.stats[0].base_stat
                pokemonToAdd.attack = acquiredPokemon.stats[1].base_stat
                pokemonToAdd.defense = acquiredPokemon.stats[2].base_stat
                for (let a in acquiredPokemon.abilities){
                    let ability = acquiredPokemon.abilities[a].ability.name
                    ability.replace('-', ' ').charAt(0).toUpperCase()
                    pokemonToAdd.abilities.push(ability)
                }
                this.pokemonList.push(pokemonToAdd)
                return true
            }
            
            
        }
        req.open('GET', `https://fizal.me/pokeapi/api/v2/name/${name}.json`)
        req.send()
    }

}
let michel = new Trainer('Michel')
