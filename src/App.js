import React, {useState} from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [number, setNumber] = useState(0);
  const [colour, setColour] = useState("");
  function createNumber(){
    let number = Math.floor((Math.random() * 998));
    setNumber(number);
  }
  function initColour(){
    const str = "0123456789ABCDEF";
    let hex = "#"
    for (let i=0; i<6;i++){
      let index = Math.floor(Math.random() * 16);
      hex+= str[index];
      console.log(hex);
    }
    // const styleObj = {
    //   border:"3px solid rgb(233, 92, 92)",
    //   boxShadow: "3px 3px 3px rgb(235, 92, 92)"
    // }
    console.log(hex);
    setColour(hex);
  }
  console.log(colour);
  initColour();
  return (
    <div className="App">
      <Card colour={colour} number={number}/>
      <button onClick={createNumber} id="next">Next</button>
    </div>
  );
}

export default App;