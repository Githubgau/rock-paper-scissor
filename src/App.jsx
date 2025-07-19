import React from 'react'
import Process from './assets/componen/Process'
import Computer from './assets/componen/Computer'
import { useState } from 'react'

function App() {

  const[elemen,setelemen]=useState("")
  const[choice,setchoice]=useState("")
  const[user,setUser]=useState(0)
  const[comp,setComp]=useState(0)

  function handle(value){
    setelemen(value);
  }

  function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 2) + 1; // 1 to 10
    const choice=['rock','paper','scissor']
    const randomChoice = choice[randomNumber];
    setchoice(randomChoice);
    console.log(randomNumber);

     if (elemen === randomChoice) {
      // tie, no increment
    } else if (
      (elemen === "rock" && randomChoice === "scissor") ||
      (elemen === "paper" && randomChoice === "rock") ||
      (elemen === "scissor" && randomChoice === "paper")
    ) {
      setUser(user + 1);
    } else {
      setComp(comp + 1);
    }
  }
  
  return (
    <div>
      <Process handle={handle} elemen={elemen} generateRandom={generateRandom} choice={choice} user={user} comp={comp}/>
      
    </div>
  )
}

export default App