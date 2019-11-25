export class Trainer {
  constructor(name) {
    this.name = name
    this.pokemonList = []
    this.equipped = null
    this.pokeballs = 4

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
    if(this.pokemonList.length > 4){
      return console.error(`${this.name}'s team is full!`);
    }
    if(!this.equipped) return this.equipped=pokemon
    else {
      
     this.pokemonList.push(pokemon)
     this.pokeballs--
    }
      
  }


  removePokemon(pokemon) {
    
    this.pokemonList = this.pokemonList.filter(p => p.id!==pokemon.id)
    
    this.pokeballs++
  }

  get(pokemon) {
    if (this.pokemonList.includes(pokemon))
      return this.pokemonList[this.pokemonList.indexOf(pokemon)]
    
    return null
  }

  equip(pokemon){
    this.removePokemon(pokemon)
    this.pokeballs--
    this.pokemonList.push(this.equipped)
    this.equipped=null
    this.equipped=pokemon
  }

}
export default Trainer
