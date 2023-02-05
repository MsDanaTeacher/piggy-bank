import React from 'react';


export default function SummaryNavBar() {
    

  return (

    <nav class="flex items-center justify-between flex-wrap p-6" style={{backgroundColor: "#FFCC02"}}>
  <div class=" items-center flex-shrink-0 text-white mr-6" style={{display: "flex"}}>
    <div>
    <a href="/"style={{color: "white", fontSize: "36px", fontFamily: "Ubuntu"}} class="mx-7">PiggyBank</a>
    </div>
    <div style={{fontFamily: "Noto Sans"}}>
      <a href="/login" style={{color: "white", fontSize: "18px", fontFamily: "Ubuntu"}}>Log out</a><br/>
      <div style={{display: "flex"}}>
      <p>User's piggy bank</p>
      <img src="https://cdn-icons-png.flaticon.com/128/3940/3940422.png" height="70px"
    width="70px"/>
    </div>
    </div>
  </div>
</nav>

  )
}
