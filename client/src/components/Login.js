import React from 'react'
import PigLogo from "../assets/piggy-bank-icon.png";
import LoginSignupNavbar from './LoginSignupNavbar';

export default function Login() {
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
        <form>
          <input type="text" placeholder="Username" className="signup-form-inputs"/><br/>
          <input type="text" placeholder="Password" className="signup-form-inputs"/><br/>
          <button style={{backgroundColor: "#B31E30", fontFamily: "Inter", color: "white", fontSize: "30px", borderRadius: "25px", padding: "10px", paddingLeft: "40px", paddingRight: "40px"}}>SIGN IN</button>
        </form>
        <p className='signup-page-already-piggybanking'>Not a member? <a href="/signup" style={{backgroundColor: "#FFCC02", fontFamily: "Roboto", color: "white", fontSize: "15px", borderRadius: "25px", padding: "8px", paddingLeft: "40px", paddingRight: "40px"}}>Sign up here!</a></p>
      </div>
    </div>
    </>
  )
}
