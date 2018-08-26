import React, { Component } from 'react';
import routes from './routes';
import './App.css';

class App extends Component {

  renderWords() {
    if (this.state.words) {
      return this.state.words.map((word, i) => {
        return <p key={i} >{word}</p>
      })
    }
  }

  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
