import React, {useState} from 'react'
import PigLogo from "../assets/piggy-bank-icon.png";
import LoginSignupNavbar from './LoginSignupNavbar';
import { useHistory } from 'react-router-dom';

export default function Login({ setUser }) {
  const history = useHistory();

  const loginBody = {
    username: "",
    password: ""
  }

  const [loginData, setLoginData] = useState({...loginBody})
  function handleLoginChange(e){
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  function handleLoginSubmit(e){
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
    .then(r => r.json())
    .then(data => {
      //set user
      //set token
      setUser(data.user)
      localStorage.setItem('token', data.token)
      history.push("/weeklyspending");
    })
  }

  return (
    <>
    <LoginSignupNavbar />
    <div class="flex flex-row">
      <div class="mx-10 my-10 h-screen mx-auto">
        <img src={PigLogo} class="content-center w-6/12 mx-auto"/>
        <h1
          style={{ color: "#FFCC02", fontSize: "60px", fontFamily: "Roboto" }}
          class="m-20  mb-8 mt-32 "
        >
          Spend. Save. Learn.
        </h1>
        
      </div>
      <div class="mx-auto">
        <h2 style={{color: "#B31E30", fontFamily: "Roboto", fontSize: "32px"}}>Welcome back, PiggyBanker!</h2>
        <form onChange={e => handleLoginChange(e)} onSubmit={e => handleLoginSubmit(e)}>
          <input type="text" name="username" value={loginData.username} placeholder="Username" className="signup-form-inputs"/><br/>
          <input type="text" name="password" value={loginData.password} placeholder="Password" className="signup-form-inputs"/><br/>
          <button style={{backgroundColor: "#B31E30", fontFamily: "Inter", color: "white", fontSize: "30px", borderRadius: "25px", padding: "10px", paddingLeft: "40px", paddingRight: "40px"}}>SIGN IN</button>
        </form>
        <p className='signup-page-already-piggybanking'>Not a member? <a href="/signup" style={{backgroundColor: "#FFCC02", fontFamily: "Roboto", color: "white", fontSize: "15px", borderRadius: "25px", padding: "8px", paddingLeft: "40px", paddingRight: "40px"}}>Sign up here!</a></p>
      </div>
    </div>
    </>
  )
}
