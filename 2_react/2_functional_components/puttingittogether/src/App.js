import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Jane" } lastName={ "Doe" } age={ 45 } hairColor={ "Black" }/>
      <PersonCard firstName={ "John" } lastName={ "Smith" } age={ 88 } hairColor={ "Brown" }/>
      <PersonCard firstName={ "Huckleberry" } lastName={ "Finn" } age={ 13 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Tom" } lastName={ "Sawyer" } age={ 14 } hairColor={ "Red" }/>
    </div>
  );
}

export default App;
