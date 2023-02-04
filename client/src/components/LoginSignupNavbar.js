import React from 'react'
import PigIcon from '../assets/piggy-bank-icon.png'

export default function LoginSignupNavbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap p-6" style={{backgroundColor: "#FFCC02"}}>
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    {/* <a href="/"><img src={PigIcon} alt="piggy bank icon" class="fill-current h-20 w-20 mr-2 " width="54" height="54" viewBox="0 0 54 54" style={{marginLeft: "10px"}}/></a> */}
    <a href="/"style={{color: "white", fontSize: "36px", fontFamily: "Ubuntu"}} class="mx-7">PiggyBank</a>
  </div>
</nav>
  )
}
