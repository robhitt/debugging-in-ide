import { useState, useEffect, Suspense } from "react";
import "./App.css";

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    console.log("hello, world");
  });

  const subtractButton = () => {
    setCurrentNumber((prevNumber) => {
      return prevNumber - 1;
    });
  };
  const addButton = () => setCurrentNumber(currentNumber + 1);

  return (
    <div className="App">
      <button className="button" onClick={subtractButton}>
        Subtract
      </button>
      <span className="number">{currentNumber}</span>
      <button className="button" onClick={addButton}>
        Add
      </button>
      <Suspense fallback="Loading...">
        <Child name="Rob" />
      </Suspense>
    </div>
  );
}

const Child = ({ name }) => {
  return <h1>{name}</h1>;
};

export default App;
