import React, { Component } from 'react';
import './App.scss';
import Trainer from './Trainer';
import Pokemon from './Pokemon'
import Map from './components/Map'

const bulbasaur = new Pokemon()
const charmander = new Pokemon()
const squirtle = new Pokemon()
bulbasaur.queryData(1)
charmander.queryData(4)
squirtle.queryData(7)
const starters = [charmander, bulbasaur, squirtle]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acknowledged : false,
      dialogueIndex: 0,
      typing: false,
      starters
    }

    //bind this
    this.acknowledge = this.acknowledge.bind(this)
    this.makeTrainer = this.makeTrainer.bind(this)
  }
  componentDidMount() {
    window.trainer = this.state.trainer
  }

  acknowledge() {
    this.setState({
      acknowledged: true, 
      dialogueIndex: this.state.dialogueIndex+1,
      typing: true
    })
  }

  makeTrainer(name){
    this.setState({
      dialogueIndex: this.state.dialogueIndex + 1,
      trainer: new Trainer(name)
    })
    window.trainer = new Trainer(name)
  }
 
  render() { 
    console.log('app.js state', this.state)
   return (
     <div id="dialogue-container">
       <Map starters={this.state.starters} />
     </div>
     
   );
 }
}

export default App;
