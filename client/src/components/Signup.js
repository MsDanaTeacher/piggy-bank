import React from 'react'
import { useState } from 'react';
import PigLogo from "../assets/piggy-bank-icon.png";
import LoginSignupNavbar from './LoginSignupNavbar';

export default function Signup({setUser}) {
  
  const avatars = [
    "https://cdn-icons-png.flaticon.com/512/3940/3940407.png",
    "https://cdn-icons-png.flaticon.com/512/3940/3940446.png",
    "https://cdn-icons-png.flaticon.com/512/3940/3940439.png",
    "https://cdn-icons-png.flaticon.com/128/3940/3940422.png"
  ]

  const signupBody = {
    username: '',
    password: '',
    avatar: ''
  }

  const [signUpData, setSignUpData] = useState({...signupBody})
  const [checked, setChecked] = useState(false)
  const [errors, setErrors] = useState([])

  function handleSignUpChange(e){
    setSignUpData({
      ...signUpData, 
      [e.target.name]: e.target.value
    })

    console.log(signUpData)

  }

  function handleSignUpSubmit(e){
    e.preventDefault();
    if(signUpData.username === '' || signUpData.password === '' || signUpData.avatar === ''){
      alert('Please complete all required fields.')
    } else {
      fetch('/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(signUpData),
      })
      .then((r) => {
        if(r.ok){
          r.json().then((data) => {
            //save the token to localStorage for future access
            localStorage.setItem("jwt", data.jwt);
            //save the user somewhere in state to log the user in
            setUser(data.user);
            alert('user created!')
          })
        } else {
          r.json().then((err) => setErrors(err.errors));
          alert('please fill in all required fields!')
        }
      })      
  }
}

  function handleAvatarSelection(e){
    setChecked(checked => !checked)
    console.log(checked)
    if(checked === false){
      signUpData.avatar = ''
    }
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
        <h2 style={{color: "#B31E30", fontFamily: "Roboto", fontSize: "32px"}}>Start PiggyBanking Today!</h2>
        <form onChange={e => handleSignUpChange(e)} onSubmit={e => handleSignUpSubmit(e)}>
          <input type="text" placeholder="Username" className="signup-form-inputs" name="username" value={signUpData.username}/><br/>
          <input type="text" placeholder="Password" className="signup-form-inputs" name="password" value={signUpData.password}/><br/>
          <label className="signup-form-banker-label">Pick Your Banker:</label><br />
          <div>
          <input type="checkbox" name='avatar' id="thing1" style={{backgroundImage: `url(${avatars[0]})`}} value={avatars[0]} onChange={e => handleAvatarSelection(e)}/><label htmlFor="thing1"></label>
          <input type="checkbox" name='avatar' id="thing2" style={{backgroundImage: `url(${avatars[1]})`}} value={avatars[1]} onChange={e => handleAvatarSelection(e)} /><label htmlFor="thing2"></label>
          <input type="checkbox" name='avatar' id="thing3" style={{backgroundImage: `url(${avatars[2]})`}} value={avatars[2]} onChange={e => handleAvatarSelection(e)} /><label htmlFor="thing3"></label>
          <input type="checkbox" name='avatar' id="thing4" style={{backgroundImage: `url(${avatars[3]})`}} value={avatars[3]} onChange={e => handleAvatarSelection(e)} /><label htmlFor="thing4"></label>
          </div>
          <br/>
          <button style={{backgroundColor: "#B31E30", fontFamily: "Inter", color: "white", fontSize: "30px", borderRadius: "25px", padding: "10px", paddingLeft: "40px", paddingRight: "40px"}}>SIGN UP</button>
        </form>
        <p className='signup-page-already-piggybanking'>Already PiggyBanking? <a href="/login" style={{backgroundColor: "#FFCC02", fontFamily: "Roboto", color: "white", fontSize: "15px", borderRadius: "25px", padding: "8px", paddingLeft: "40px", paddingRight: "40px"}}>Log in here!</a></p>
      </div>
    </div>
    </>
  )
}

//NEED TO MAKE THE ABOVE AGAIN BUT THIS TIME REMOVE THE PIG ICON WHEN IN MOBILE MEDIA QUERY