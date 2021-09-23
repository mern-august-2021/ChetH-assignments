import './App.css';
import PersonCard from './components/personCard';
// import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <PersonCard fName="Jane" lName="Doe" age={ 45 } hairColor="Brown"></PersonCard>
      <PersonCard fName="John" lName="Smith" age={ 88 } hairColor="Black"></PersonCard>
      <PersonCard fName="Pepe" lName="LePiu" age={ 7 } hairColor="Tuxido"></PersonCard>
      <PersonCard fName="Home" lName="Simpson" age={ 35 } hairColor="Pencil"></PersonCard>
    </div>
  );
}

export default App;
