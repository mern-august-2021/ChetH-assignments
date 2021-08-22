import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  
  const [taskList, setTaskList] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <Form taskList={ taskList } setTaskList={ setTaskList }/>

      </header>
    </div>
  );
}

export default App;
