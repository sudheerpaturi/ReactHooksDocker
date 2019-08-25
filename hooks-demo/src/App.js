import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect (() => {
    document.title = `You clicked ${count} times`;
  });

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        Hello there!
      </button>
      <p>Count is {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
    
  );
}

export default App;
