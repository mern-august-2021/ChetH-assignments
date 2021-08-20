import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import Show from './components/Show';

const contentList = [
  {
      label: "Tab 1",
      content: "Tab 1 contents showing here."
  },
  {
      label: "Tab 2",
      content: "Tab 2 contents showing there."    
  },
  {
      label: "Tab 3",
      content: "Tab 3 contents showing everywhere."    
  }
];

function App() {
  
  const [contentState, setContentState] = useState(contentList);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="App">
      <Tabs contentState={ contentState } setContentState={ setContentState } selectedTab={ selectedTab } setSelectedTab={ setSelectedTab }/>
      <Show contentState={ contentState } setContentState={ setContentState } selectedTab={ selectedTab } setSelectedTab={ setSelectedTab }/>
    </div>
  );
}

export default App;
