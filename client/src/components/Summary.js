import React from 'react'
import SummaryNavBar from './SummaryNavBar'
import {useState} from 'react';
import { Data } from "./Data";
import PieChart from './PieChart';
import {Chart, ArcElement} from 'chart.js'

export default function Summary() {
  Chart.register(ArcElement);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
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
    <div>
      <SummaryNavBar />
      <section class="h-40" style={{fontFamily: "Noto Sans", color: "#FFCC02"}}>
    <p>User's Spending Summary</p>
    <div style={{display: "flex"}}>
    <p>Dates</p>
    <select className="select-summary-dates">
        <option>Select Dates</option>
        <option>Map through all dates saved in backend to create dropdowns</option>
    </select>
    </div>
</section>
<section class="h-screen" style={{backgroundColor: "#B31E30", fontFamily: "Noto Sans", textAlign: "center"}}>
    <p style={{color: "white"}}>Look back at your spending to make new financial goals!</p>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", justifyContent: "space-evenly"}}>
        <PieChart chartData={chartData} />
        <div class="w-1/4 text-center" style={{backgroundColor: "white", borderRadius: "15%", fontFamily: "Noto Sans", color: "#FFCC02", fontSize: "16px", height: "50vh", padding: "2%"}}>
              <p>Spending Receipt</p>
              <p>Here will use .map to map through each thing spent that has been posted to the backend to add
                it to the receipt.
              </p><br/>
              <p>____________________________________________</p><br/>
              <p>I had________to spend. I spent_____________on wants and _____________
                 on needs. I saved ______________.</p>
        </div>
    </div>
</section>
    </div>
  )
}
