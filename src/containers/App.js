import React from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>
            src/containers/App.js
          </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="App-link"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
