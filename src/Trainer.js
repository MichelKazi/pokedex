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
    if(this.pokemonList.length >= 5){
      console.error(`${this.name}'s team is full!`);
    }
    else if(this.pokemonList.length === 0){
      return this.equipped=pokemon
    }
    else this.pokemonList.push(pokemon)
  }


  removePokemon(pokemon) {
    if(this.get(pokemon))
      if(this.equipped === pokemon) this.equipped=null
      this.pokemonList = this.pokemonList.splice(this.pokemonList.indexOf(pokemon))
  }

  get(pokemon) {
    if (this.pokemonList.includes(pokemon))
      return this.pokemonList[this.pokemonList.indexOf(pokemon)]
    return null
  }

  equip(pokemon){
    if (this.pokemonList.includes(pokemon)){
      const toEquip = this.pokemonList.splice(this.pokemonList.indexOf(pokemon))
      this.pokemonList.push(this.equipped)
      this.equipped=toEquip
    }
    else console.error(`You don't have that pokemon!`);
    
  }
}
export default Trainer
