import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Display from './components/GpaCalculator/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
