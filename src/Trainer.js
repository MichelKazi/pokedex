import Pokemon from './Pokemon'


export class Trainer {
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
        const added = new Pokemon()
        added.queryData(input)
        this.pokemonList.push(added)
    }

    removePokemon(input) {
        
    }

}
export default Trainer
