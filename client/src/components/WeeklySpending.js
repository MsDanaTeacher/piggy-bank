import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Data } from "./Data";
import PieChart from "./PieChart";
import { Chart, ArcElement } from "chart.js";
import DateRange from "./DateRange";
import { addDays } from "date-fns";
import SpentTile from "./SpentTile";
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
          "#2a71d0",
        ],
        // borderColor: "black",
        borderWidth: 0,
      },
    ],
  });
  const [selectDates, setSelectDates] = useState(false);
  const username = user.username;
  const userId = user.id;

  function handleSelectDates() {
    setSelectDates((prev) => !prev);
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [reflection, setReflection] = useState("");
  const [budget, setBudget] = useState(0)
  const [price, setPrice] = useState(0)
  const [purchased, setPurchased] = useState("")
  const [type, setType] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [date, setDate] = useState("")
  const [saved, setSaved] = useState(false)
  const [wants, setWants] = useState([])

  function handleDateChange(e) {
    setState([e.selection]);
    setStartDate(state[0].startDate.toString().slice(0,15))
    setEndDate(state[0].endDate.toString().slice(0,15))
  }

  function handleSelect(e) {
    setReflection(e.target.value);
  }

  function handleSpendingFormChange(e){
    if(e.target.name==="budget"){
    setBudget(
      e.target.value
    )
    }
    if(e.target.name==="price"){
      setPrice(
      e.target.value 
    )
    }
    if(e.target.name==="purchased"){
      setPurchased(
      e.target.value
    )
    }
    if(e.target.name==="type"){
      setType(
        e.target.value
      )
    }
  }

  function handleSpendingSubmit(e){
    let token = localStorage.getItem('token')
    e.preventDefault();
    if(user){
    fetch("/spendings", {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        reflection: reflection,
        budget: budget,
        date: `${startDate} - ${state[0].endDate}`
      }),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  if(type === "need"){
    fetch("/needs", {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        price: price,
        purchased: purchased,
        date: `${startDate} - ${state[0].endDate}`
      }),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(data => console.log(data, 'needs'))
    .then(setSelectDates(false))
  }

  if(type === "want"){
    fetch("/wants", {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        price: price,
        purchased: purchased,
        date: `${startDate} - ${state[0].endDate}`
      }),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(data => console.log(data, 'wants'))
    .then(setSelectDates(false))
    .then(setSaved(true))
  }
}

let dateChosen = `${startDate} - ${endDate}`

useEffect(() => {
  fetch(`/wants/${userId}`)
  .then(r => r.json())
  .then(data => setWants(data))
}, [])

console.log(wants)
  return (
    <>
      <NavBar user={user} setUser={setUser} dateChosen={dateChosen}/>
      <div class="flex justify-center w-screen h-screen">
        <div
          class="w-1/2 text-center"
          style={{
            fontFamily: "Noto Sans",
            color: "#FFCC02",
            fontSize: "16px",
          }}
        >
          <p>
            {username}
            's Weekly Spending
          </p>
          <button onClick={handleSelectDates}>Dates:</button>
          {/* <h2>
            {date.startDate}- {date.endDate}
          </h2> */}
          <div className={selectDates ? null : "date-range-hidden"}>
            <DateRange
              state={state}
              setState={setState}
              handleDateChange={handleDateChange}
              form="spendingform"
            />
          </div>

         <PieChart chartData={chartData}/>

          {/* <form class="text-center"> */}
            <select
              onChange={(e) => handleSelect(e)}
              style={{
                backgroundColor: "#FFCC02",
                color: "white",
                fontSize: "14px",
                borderRadius: "25px",
                padding: "4px",
                paddingLeft: "40px",
                paddingRight: "40px",
                textAlign: "center",
              }}
              form="spendingform"
            >
              <option>How did I do with my spending this week?</option>
              <br />
              <option>I spent just the right amount on wants and needs</option>
              <option>I spent too much on wants</option>
              <option>I could have spent more on wants</option>
              <option>I saved a lot this week</option>
            </select>
        </div>
        <div
          class="w-1/2"
          style={{
            backgroundColor: "#B31E30",
            fontFamily: "Noto Sans",
            color: "white",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          
          <form id="spendingform" onChange={e => handleSpendingFormChange(e)} onSubmit={e => handleSpendingSubmit(e)}>
          <p>
            This week, I had $
            <input type="number" className="total-to-spend" name="budget" value={budget}/>
            to <br />
            spend. I spent: 
          </p>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input type="number" className="total-to-spend" name="price" value={price}/>
              <p>on</p>
              <input type="text" className="total-to-spend" name="purchased" value={purchased}/>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>which was a</p>
              <select className="total-to-spend" name="type" value={type}>
                <option>Need or Want?</option>
                <option>need</option>
                <option>want</option>
              </select>
              <p>.</p>
              <button className="total-to-spend">Save Purchase</button>
            </div>
          </form>
          <div
            class="h-1/2 w-1/2 text-center"
            style={{
              backgroundColor: "white",
              borderRadius: "25%",
              fontFamily: "Noto Sans",
              color: "#FFCC02",
              fontSize: "16px",
              overflow: "scroll"
            }}
          >
            <p>
              Spending <br /> Receipt
            </p>
            {wants.map((want) => {
              return <SpentTile want={want} />
            })}
            <br />
            <p>__________________________________________________</p>
            <br />
            <p>
              I had________to spend. I spent_____________on wants and
              _____________ on needs. I saved ______________.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
