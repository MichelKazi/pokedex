import React, { Component } from 'react';
import './App.scss';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			acknowledged : false,
			dialogueIndex: 0,
			typing: false,
		}

	}
	componentDidMount() {
		window.trainer = this.state.trainer
	}

	render() { 
		console.log('app.js state', this.state)
		return (
			<div >
				<img id="bg" src="https://i.imgur.com/5HZHZr5.png" alt=""></img>

			</div>

		);
	}
}

export default App;
