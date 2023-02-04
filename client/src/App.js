import {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import WeeklySpending from './components/WeeklySpending';
import Summary from './components/Summary';


// import NavBar from './components/NavBar';
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
      {/* <NavBar /> */}
      <BrowserRouter>
      <Switch>
            <Route path="/summary"><Summary /></Route>
            <Route path="/weeklyspending"><WeeklySpending /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/login"><Login /></Route>
            <Route exact path="/"><LandingPage /></Route>
            <Route path="*"><h1>Oops! This page hasn't been created yet!</h1></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
