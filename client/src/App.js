import {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

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
      <BrowserRouter>
      <Switch>
            <Route path="/landingpage"><LandingPage /></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
