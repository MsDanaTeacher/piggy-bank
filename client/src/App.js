import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState({});

  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then((data) => console.log(data))
    // console.log(message)
  }, []);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
