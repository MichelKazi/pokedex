import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trainer from './Trainer';
import Dialogue from './Dialogue'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: null,
      acknowledged : false,
      dialogueIndex: 0
    }

    //bind this
    this.acknowledge = this.acknowledge.bind(this)
  }
  componentDidMount() {
    window.trainer = new Trainer('')
  }

  acknowledge() {
    this.setState({
      acknowledged: true, 
      dialogueIndex: this.state.dialogueIndex+1
      
    })
  }

  render() {
    console.log('app.js state', this.state)
   return (
     <div id="dialogue-container">
       <img id="oak" src="https://www.spriters-resource.com/resources/sheet_icons/4/3701.png" alt=""></img>
       <Dialogue dialogueIndex={this.state.dialogueIndex} onClick={this.acknowledge}/>
     </div>
     
   );
 }
}

export default App;
