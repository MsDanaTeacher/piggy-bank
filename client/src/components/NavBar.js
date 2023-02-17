import React from 'react'
import PigIcon from '../assets/piggy-bank-icon.png'
import { useHistory } from "react-router-dom";
export default function NavBar({ user, setUser }) {

  const history = useHistory();

  function handleLogoutClick(){
    setUser({username: ''})
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <>
    {user ?<nav class="flex items-center justify-between flex-wrap p-6" style={{backgroundColor: "#FFCC02"}}>
  <div class=" items-center flex-shrink-0 text-white mr-6"> 
    
    // {/* <a href="/"><img src={PigIcon} alt="piggy bank icon" class="fill-current h-20 w-20 mr-2 " width="54" height="54" viewBox="0 0 54 54" style={{marginLeft: "10px"}}/></a> */}
    <a href="/"style={{color: "white", fontSize: "36px", fontFamily: "Ubuntu"}} class="mx-7">PiggyBank</a>
    <button onClick={handleLogoutClick} style={{color: "white", fontSize: "18px", fontFamily: "Ubuntu"}}>Log out</button>
    <div class="mx-7" style={{fontFamily: "Noto Sans", display: "flex"}}>
   
    <div style={{display: "flex"}}>
      <p>{user.username}'s piggy bank</p>
      <img src="https://cdn-icons-png.flaticon.com/128/3940/3940422.png" height="70px"
    width="70px"/>
    </div>
  </div>
  </div>
</nav>:
      <nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    <a href="/"><img src={PigIcon} alt="piggy bank icon" class="fill-current h-20 w-20 mr-2 " width="54" height="54" viewBox="0 0 54 54" style={{marginLeft: "10px"}}/></a>
    <span style={{color: "#FFCC02", fontSize: "36px", fontFamily: "Ubuntu"}}>PiggyBank</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
     
    </div>
    <div>
      <a href="/login" class="inline-block text-sm px-10 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" style={{color:"#FFCC02", fontSize: "36px", fontFamily: "Inter"}}>Log In</a>
    </div>
  </div>
</nav>
}
</>
//THIS IS THE LOGGED IN NAVBAR(if user is true/logged in):

  )
}
