import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Trainer from './Trainer';
import Dialogue from './components/Dialogue'
import Map from './components/Map'
import TrainerCard from './components/TrainerCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: null,
      acknowledged : false,
      dialogueIndex: 0,
      typing: false
    }

    //bind this
    this.acknowledge = this.acknowledge.bind(this)
    this.makeTrainer = this.makeTrainer.bind(this)
  }
  componentDidMount() {
    window.trainer = new Trainer('')
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
       
       {/* <img id="oak" src="https://www.spriters-resource.com/resources/sheet_icons/4/3701.png" alt=""></img> */}
       <Map />
       <TrainerCard />
       {/* <Dialogue dialogueIndex={this.state.dialogueIndex} onClick={this.acknowledge} onSubmit={this.makeTrainer}/> */}
     </div>
     
   );
 }
}

export default App;
