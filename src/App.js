// import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <Card />
      <button id="next">Next</button>
    </div>
  );
}

export default App;

{/*
NEXT STEPS:
- Next button reloads page / generates new word
- clicking the dutch word reveals the translation
*/}