import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trainer from './Trainer';
import Dialogue from './Dialogue'

class App extends Component {
  componentDidMount(){
    window.trainer = new Trainer('michel')
  }

  render() {

   return (
     <div id="dialogue-container">
       <img id="oak" src="https://www.spriters-resource.com/resources/sheet_icons/4/3701.png" alt=""></img>
       <Dialogue />
     </div>
     
   );
 }
}

export default App;
