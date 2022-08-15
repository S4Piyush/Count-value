import logo from './logo.svg';
import './App.css';
import './Style.css';
import { useState, useEffect } from "react";

let CInterval;
function App() {
  const [count, setcount] = useState(0);
  const [isStarted, setStarted] = useState(false);
  const [type, setType] = useState("");

  const start = () => {
    CInterval = setInterval(() => {
      setStarted(true);
      if (type === "minus") {
        setcount((count) => count - 1);
      } else {
        setcount((count) => count + 1);
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(CInterval);
    CInterval = null;
    setStarted(false);
  };

  const clear = () => {
    stop();
    setcount(0);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button style={{ color: isStarted ? "red" : "black" }} onClick={start}>
        start
      </button>
      <button style={{ color: isStarted ? "black" : "red" }} onClick={stop}>
        Stop
      </button>
      <button onClick={clear}>clear</button>
      <br></br>
      <br></br>
      <div>
        <button onClick={() => setType("plus")}>+</button>
        <button onClick={() => setType("minus")}>-</button>
      </div>
    </div>
  );
}

export default App;