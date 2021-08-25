import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Summary from './components/Summary';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home path="/home"/>
          <Summary path="/:id"/>
          <Detail path="/:id/:fcolor/:bcolor"/>
        </Router>
      </header>
    </div>
  );
}

export default App;
