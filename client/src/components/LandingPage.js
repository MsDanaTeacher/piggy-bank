import React from "react";
import PigBackground from "../assets/piggyhome.jpg";
import NavBar from "./NavBar.js";

export default function LandingPage() {
  return (
    <>
    <NavBar />
    <div class="flex flex-row">
      <div class="absolute z-10 mx-10 my-10 h-screen">
        <h1
          style={{ color: "#FFCC02", fontSize: "60px", fontFamily: "Roboto" }}
          class="m-20  mb-8 mt-32"
        >
          Financial literacy is <br/>important.<br/> Spend. Save. Learn.
        </h1>
        <a href="/signup" style={{backgroundColor: "#B31E30", fontFamily: "Inter", color: "white", fontSize: "30px", borderRadius: "25px", padding: "10px", paddingLeft: "40px", paddingRight: "40px"}} class="m-20">Sign Up</a>
      </div>
      <div class="absolute z-0">
        <img src={PigBackground} class="h-screen w-screen md:w-full md:h-full"/>
      </div>
    </div>
    </>
  );
}
