import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Card';
import Footer from './Footer';

function App() {
  const [number, setNumber] = useState(0);
  const [colour, setColour] = useState("");
  function createNumber(){
    let number = Math.floor((Math.random() * 998));
    setNumber(number);
  }    
  useEffect(() => {
    const str = "0123456789ABCDEF";
    let hex = "#"
    for (let i=0; i<6;i++){
      let index = Math.floor(Math.random() * 16);
      hex+= str[index];
    }
    setColour(hex);
  }, [number, setNumber]);
  return (
    <div className="App">
      <Card colour={colour} number={number}/>
      <button style={{borderColor:colour}} onClick={createNumber} id="next">Next</button>
      <Footer />
    </div>
  );
}

export default App;