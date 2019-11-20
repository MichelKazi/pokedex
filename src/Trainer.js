const axios = require('axios')
class Pokemon {
    constructor(name=null, stats=null) {
        this.name = name
        this.stats = stats
    }

    //This method is for generating random pokemon
    fetchIfNull(id){
        axios.get('https://fizal.me/pokeapi/api/v2/id/${id}.json')
        .then((response)=> {
            const acquired = response.data
            console.log(response);
            return acquired
        })
        
    }

}

class Trainer {
    constructor(name) {
        this.name = name
        this.pokemonList = []

        //binding this keyword for methods
        this.all = this.all.bind(this)
        this.addPokemon = this.addPokemon.bind(this)
        this.fetchPokeAPI = this.fetchPokeAPI.bind(this)
    }

    all () {
        return this.pokemonList
    }

    addPokemon(input) {
        return this.fetchPokeAPI(input).then(acquiredPokemon => {
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
            return console.log(`${pokemonToAdd.name} was added to ${this.name}'s team!`);  
        })

    }

    removePokemon(input) {
        
    }

    fetchPokeAPI = async (input) => {
        let response

        try {
            response = await axios.get(`https://fizal.me/pokeapi/api/v2/${isNaN(input) ? 'name/' : 'id/'}${input}.json`)
            response = response.data
            return response
        }
        catch (err) {
            console.error(`${input} was not a valid entry!`)
        }
        
        
    }

}
export default Trainer
