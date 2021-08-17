import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';

function App() {
  const [colorList, setColorList] = useState([]);

  return (
    <div className="App">
        <ColorForm colorList={ colorList } setColorList={ setColorList }/>
        <ColorDisplay colorList={ colorList } setColorList={ setColorList }/>
    </div>
  );
}

export default App;
