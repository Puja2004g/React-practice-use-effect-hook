import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {

    document.title = toggle ? "Welcome to Little Lemon ": "Using the use effect hook";
  }, [toggle]);

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}

export default App;
