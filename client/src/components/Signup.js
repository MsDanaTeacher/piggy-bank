import React from 'react'
import PigLogo from "../assets/piggy-bank-icon.png";
export default function Signup() {
  return (
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
        <form>
          <input type="text" placeholder="Username" className="signup-form-inputs"/><br/>
          <input type="text" placeholder="Password" className="signup-form-inputs"/><br/>
          <input type="text" placeholder="Password Confirmation" className="signup-form-inputs"/><br />
          <label className="signup-form-banker-label">Pick Your Banker:</label><br />
          <div>
          <input type="checkbox" name='thing1' id="thing1"/><label htmlFor="thing1"></label>
          <input type="checkbox" name='thing2' id="thing2"/><label htmlFor="thing2"></label>
          <input type="checkbox" name='thing3' id="thing3"/><label htmlFor="thing3"></label>
          <input type="checkbox" name='thing4' id="thing4"/><label htmlFor="thing4"></label>
          </div>
          <br/>
          <button style={{backgroundColor: "#B31E30", fontFamily: "Inter", color: "white", fontSize: "30px", borderRadius: "25px", padding: "10px", paddingLeft: "40px", paddingRight: "40px"}}>SIGN UP</button>
        </form>
        <p className='signup-page-already-piggybanking'>Already PiggyBanking? <a href="/login" style={{backgroundColor: "#FFCC02", fontFamily: "Roboto", color: "white", fontSize: "15px", borderRadius: "25px", padding: "8px", paddingLeft: "40px", paddingRight: "40px"}}>Log in here!</a></p>
      </div>
    </div>
  )
}

//NEED TO MAKE THE ABOVE AGAIN BUT THIS TIME REMOVE THE PIG ICON WHEN IN MOBILE MEDIA QUERY