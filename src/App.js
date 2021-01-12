import React from 'react';
import Counter from './Counter';
import './App.css';


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h2> My Counter : </h2>
        <Counter />

      </header>
    </div>
    );
  }
}

export default App;
