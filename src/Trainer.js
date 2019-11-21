import Pokemon from './Pokemon'


export class Trainer {
    constructor(name) {
        this.name = name
        this.pokemonList = []

        //binding this keyword for methods
        this.all = this.all.bind(this)
        this.addPokemon = this.addPokemon.bind(this)
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
        // eslint-disable-next-line eqeqeq
        this.pokemonList = this.pokemonList.filter(pokemon => isNaN(input) ? pokemon.id!=input : pokemon.name!=input)
        //this line doesn't work :(
    }

}
export default Trainer
