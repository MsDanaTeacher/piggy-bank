import React from 'react'
import {useState} from 'react';
import NavBar from './NavBar'
import { Data } from "./Data";
import PieChart from './PieChart';
import {Chart, ArcElement} from 'chart.js'


export default function WeeklySpending({ user, setUser }) {
  Chart.register(ArcElement);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        labels: Data.map((data) => data.type),
        color: "black",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        // borderColor: "black",
        borderWidth: 0
      }
    ]
  });

  return (
    <>
      <NavBar user={user} setUser={setUser}/>
      <div class="flex justify-center w-screen h-screen">
        <div class="w-1/2 text-center" style={{fontFamily: "Noto Sans", color: "#FFCC02", fontSize: "16px"}}>
          <p>User's Weekly Spending</p>
          
         
          <PieChart chartData={chartData} />

          <form class="text-center">
            
        <select style={{backgroundColor: "#FFCC02", color: "white", fontSize: "14px", borderRadius: "25px", padding: "4px", paddingLeft: "40px", paddingRight: "40px", textAlign: "center"}}>
          <option>How did I do with my spending this week?</option><br />
          <option>I spent just the right amount on wants and needs</option>
          <option>I spent too much on wants</option>
          <option>I could have spent more on wants</option>
          <option>I saved a lot this week</option>
        </select>
        <button style={{backgroundColor: "#B31E30", color: "white", fontSize: "14px", borderRadius: "25px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center"}}>Save</button>
      </form>
      </div>
        <div class="w-1/2" style={{backgroundColor: "#B31E30", fontFamily: "Noto Sans", color: "white", fontSize: "16px", textAlign: "center"}}>
          
          <p>This week, I had $ 
            <input type="number" className="total-to-spend"/>to <br />spend. I spent:</p>
            <form>
              <div style={{display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center"}}>
            <input type="number" className="total-to-spend"/><p>on</p><input type="text" className="total-to-spend"/>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <p>which was a</p>
            <select className="total-to-spend">
              <option>Need or Want?</option>
              <option>need</option>
              <option>want</option>
            </select>
            <p>.</p>
            <button className="total-to-spend">Save Purchase</button>
            </div>
            </form>
            <div class="h-1/2 w-1/2 text-center" style={{backgroundColor: "white", borderRadius: "25%", fontFamily: "Noto Sans", color: "#FFCC02", fontSize: "16px"}}>
              <p>Spending <br/> Receipt</p>
              <p>Here will use .map to map through each thing spent that has been posted to the backend to add
                it to the receipt.
              </p><br/>
              <p>__________________________________________________</p><br/>
              <p>I had________to spend. I spent_____________on wants and _____________
                 on needs. I saved ______________.</p>
            </div>
        </div>
      </div>
    </>
  )
}
