import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import "tailwindcss";

function App() {
let [counter,setcounter]= useState(15);
const addval= ()=>{
  if(counter<=20){
setcounter(counter+1);
}}
const subval=()=>{
 if(counter >=10) setcounter(counter -1);
}
  return (
    <>
     <h1 className='bg-green-400'>Prathamesh Kale</h1>
     <h2>Count={counter}</h2>
     <button
   onClick={addval}  >Add value</button>
     <button
     onClick={subval}>Sub value</button>
    </>
  )
}

export default App
