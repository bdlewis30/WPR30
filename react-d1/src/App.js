import React, { Component } from 'react';
import './App.css';
import Thing from './Thing.js';
import Concerned from './Concerned.js'; // use ./ if you created the file, no ./ if you did not and it exists in your node_modules

// App.js is our root component

class App extends Component {
  render() {
    return (
      <div className="App">
       <Thing />
       <Concerned />
      </div>
    );
  }
}

export default App;
