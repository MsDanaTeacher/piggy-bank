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
  const [user, setUser] = useState({ username: '' })
  
  // auto login
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token && !user.username){
      fetch("/me", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(data => {
        if(data.user){
          setUser(data.user);
        }
      })
    }
  }, []);
  
  return (
    <div className="App">
      {/* <NavBar /> */}
      <BrowserRouter>
      <Switch>
            <Route path="/summary"><Summary /></Route>
            <Route path="/weeklyspending"><WeeklySpending user={user} setUser={setUser}/></Route>
            <Route path="/signup"><Signup setUser={setUser}/></Route>
            <Route path="/login"><Login setUser={setUser}/></Route>
            <Route exact path="/"><LandingPage /></Route>
            <Route path="*"><h1>Oops! This page hasn't been created yet!</h1></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
