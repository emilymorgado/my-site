import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Emily Morgado</h1>
        <p>A brief about...</p>
        <ul>
          <li>articles</li>
          <li>projects</li>
          <li>passions</li>
        </ul>
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
