// import logo from './logo.svg';
import './App.css';
import Card from './Card';
// import Next from './Next';

function App() {
  function refresh(){
    window.location.reload();
  }
  return (
    <div className="App">
      <Card />
      <button onClick={refresh} id="next">Next</button>
    </div>
  );
}

export default App;