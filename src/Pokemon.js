import { promised } from 'q'

const axios = require('axios')
export class Pokemon {
    constructor() {
        this.name = null
    }

    randomQuery() {
        return this.queryData(Math.floor(Math.random() * 800) + 1)
    } // This method is meant for the map to randomize pokemon throughout the 

    queryData = async (id) => {
        let response

        try {
            response = await axios.get(`https://fizal.me/pokeapi/api/v2/${isNaN(id) ? 'name/' : 'id/'}${id}.json`)
            const acquiredPokemon = response.data
            
            this.name = acquiredPokemon.name
            this.id = acquiredPokemon.id
            this.hp = acquiredPokemon.stats[5].base_stat// For every single Pokemon JSON, 
            this.attack = acquiredPokemon.stats[4].base_stat // these indices for stats will
            this.defense = acquiredPokemon.stats[3].base_stat // always be the same 
            this.weight = acquiredPokemon.weight
            this.spriteURL = acquiredPokemon.sprites.front_default
            
            this.abilities = acquiredPokemon.abilities.map(abilities => {
                return abilities.ability.name.replace('-', ' ')
            })
            
            return Promise.resolve(this)
        }
        catch (err) {
            console.error(err)
        }
            
    }

}

export default Pokemon