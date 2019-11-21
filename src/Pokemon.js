const axios = require('axios')
export class Pokemon {
    constructor(name = null, stats = null) {
        this.name = name
        this.stats = stats
    }

    //This method is for generating random pokemon
    queryData = async (id) => {
        // axios.get(`https://fizal.me/pokeapi/api/v2/${isNaN(id) ? 'name/' : 'id/'}${id}.json`)
        //     .then((response) => {
        //         const acquiredPokemon = response.data
        //         const stats = {
        //             weight: acquiredPokemon.weight,
        //             hp: acquiredPokemon.stats[5].base_stat, // For every single Pokemon JSON, 
        //             attack: acquiredPokemon.stats[4].base_stat, // these indices for stats will
        //             defense: acquiredPokemon.stats[3].base_stat, // always be the same 
        //             abilities: acquiredPokemon.abilities.map(abilities => {
        //                 return abilities.ability.name.replace('-', ' ')
        //             })
        //         }
        //         this.stats = stats
        //         this.name = acquiredPokemon.name
        //     })
            
        let response

        try {
            response = await axios.get(`https://fizal.me/pokeapi/api/v2/${isNaN(id) ? 'name/' : 'id/'}${id}.json`)
            const acquiredPokemon = response.data
            
            this.name = acquiredPokemon.name
            this.spriteURL = acquiredPokemon.sprites.front_default
            this.weight = acquiredPokemon.weight
            this.hp = acquiredPokemon.stats[5].base_stat// For every single Pokemon JSON, 
            this.attack = acquiredPokemon.stats[4].base_stat // these indices for stats will
            this.defense = acquiredPokemon.stats[3].base_stat // always be the same 
            
            this.abilities = acquiredPokemon.abilities.map(abilities => {
                return abilities.ability.name.replace('-', ' ')
            })
            
            return this
        }
        catch (err) {
            console.error(`${id} was not a valid entry!`)
        }
            
    }

}

export default Pokemon