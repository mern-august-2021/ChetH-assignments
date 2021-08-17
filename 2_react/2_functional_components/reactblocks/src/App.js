import './App.css';
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContent from './components/SubContent';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <div id="nav_plus_main">
      <Navigation />
      <div id="main">
        <SubContent />
        <SubContent />
        <SubContent />
        <Advertisement />
      </div>
    </div>
    </div>
  );
}

export default App;
