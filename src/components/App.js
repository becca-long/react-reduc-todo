import React, { Component } from 'react';
import '../styles/App.css';
import TodoAppContainer from '../containers/TodoAppContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoAppContainer />
      </div>
    );
  }
}

export default App;
