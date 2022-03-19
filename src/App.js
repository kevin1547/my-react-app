/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [number, setNumber] =useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <div>{number}</div>
        <button onClick={()=>{setNumber(number+1)}}>加一</button>
        <button onClick={()=>{setNumber(number-1)}}>減一</button>
      </header>
      
    </div>
  );
}
*/



import Slider from './Work/Slider'

function App() {
  return (
    <>
    <Slider />
    </>
  );
}

export default App;