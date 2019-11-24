import Pokemon from './Pokemon'


export class Trainer {
  constructor(name) {
    this.name = name
    this.pokemonList = []
    this.equipped = null

    //binding this keyword for methods
    this.all = this.all.bind(this)
    this.addPokemon = this.addPokemon.bind(this)
    this.get = this.get.bind(this)
    this.equip = this.equip.bind(this)
  }

  all() {
    return this.pokemonList
  }

  allTeam(){
    return this.team
  }

  addPokemon(pokemon) {
    if(this.pokemonList.length >= 4){
      console.error(`${this.name}'s team is full!`);
    }
    else if(this.pokemonList.length === 0){
      this.pokemonList.push(pokemon)
      return this.equip(pokemon)
    }
    else this.pokemonList.push(pokemon)
  }


  removePokemon(pokemon) {
    if(this.get(pokemon))
      this.pokemonList = this.pokemonList.splice(this.pokemonList.indexOf(pokemon))
  }

  get(pokemon) {
    if (this.pokemonList.includes(pokemon))
      return this.pokemonList[this.pokemonList.indexOf(pokemon)]
    return null
  }

  equip(pokemon){
    if (this.pokemonList.includes(pokemon)){
      this.equipped = pokemon
      return this.equipped
    }
    else console.error(`Your team is full!`);
    
  }
}
export default Trainer
