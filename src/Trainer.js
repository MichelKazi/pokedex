import Pokemon from './Pokemon'


export class Trainer {
    constructor(name) {
        this.name = name
        this.pokemonList = []

        //binding this keyword for methods
        this.all = this.all.bind(this)
        this.addPokemon = this.addPokemon.bind(this)
        this.get = this.get.bind(this)
    }

    all () {
        return this.pokemonList
    }

    addPokemon(pokemon) {
        this.pokemonList.push(pokemon)
    }

    get(pokemon){
        if(this.pokemonList.includes(pokemon))
            return this.pokemonList[this.pokemonList.indexOf(pokemon)]
        return `You don't have this Pokemon`
    }

    removePokemon(input) {
        // eslint-disable-next-line eqeqeq
        this.pokemonList = this.pokemonList.filter(pokemon => isNaN(input) ? pokemon.id!=input : pokemon.name!=input)
        //this line doesn't work :(
    }

}
export default Trainer
