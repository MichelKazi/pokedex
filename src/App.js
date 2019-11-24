import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Trainer from './Trainer';
import Dialogue from './components/Dialogue'
import Map from './components/Map'
import TrainerCard from './components/TrainerCard'
import Pokemon from './Pokemon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acknowledged : false,
      dialogueIndex: 0,
      typing: false
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
       <Map trainer={this.state.trainer} />
     </div>
     
   );
 }
}

export default App;
