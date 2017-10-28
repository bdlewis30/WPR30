import React, { Component } from 'react';

class Concerned extends Component {
  constructor() {
    super() // must call super before anything else
    this.state = { // this is where we initialize state. This is the only time you set this.state equal to a value. When you want to change state, you will always use this.setState({...})
      number: 0,
      colors: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
      background: 'gray'
    }
  }

  // only methods go in this area

  increaseNumber() {
    this.setState({ // pass in an object with the property name that you want to change on state and the new value you want it to be changed to
      number: this.state.number + 1
    })
  }

  party() {
    this.setState({
      background: this.state.colors[Math.floor(Math.random() * 6) + 1]
    })
  }

  render() {

    // you can write javascript logic here, ex: variables, etc.. 

    // what you see in the browser, the view, or the DOM goes in the the return
    return (
      <div style={{backgroundColor: this.state.background}}>

        <h1>CONCERNED about state THING!</h1>
        <h2>{this.state.number}</h2>
        <button onClick={() => this.increaseNumber()}>INCREASE NUMBER</button> 
        {/* for event listeners, make sure to have an uninvoked function with the invoked method inside */}
        {/* if you have an invoked function only, it will fire immediately and break all the things */}

        {/* separate fun stuff from after the lecture */}
        <button onClick={() => this.party()}>PARTY BUTTON</button>
        {this.state.background === 'blue' ? 'BLUE!!' : 'not blue :('}


      </div>
    )
  }

}

export default Concerned;