import React, {useState} from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [number, setNumber] = useState(0);
  function createNumber(){
    let number = Math.floor((Math.random() * 998));
    setNumber(number);
  }
  return (
    <div className="App">
      <Card number={number}/>
      <button onClick={createNumber} id="next">Next</button>
    </div>
  );
}

export default App;