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

    // fetchPokeAPI(input) {
    //     const axios = require('axios');
    //     // Make a request for a user with a given ID
    //     return axios.get(`https://fizal.me/pokeapi/api/v2/${isNaN(input)?'name/':'id/'}${input}.json`)
    //         .then( (response) =>  {
    //             console.log(response);
    //             return response.data
    //         })
    //         .catch(function (error) {
    //             console.error(`${input} was not a valid entry!`)

    //         })
    // }

    fetchPokeAPI = async (input) => {
        const axios = require('axios')
        let response

        try {
            response = await axios.get(`https://fizal.me/pokeapi/api/v2/${isNaN(input) ? 'name/' : 'id/'}${input}.json`)
            return response.data
        }
        catch (err) {
            console.error(`${input} was not a valid entry!`)
        }
    }

}
export default Trainer
