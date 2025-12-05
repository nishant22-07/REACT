import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);
  let myObj  = {
    username : "Nishant",
    age : 21
  }
  let arr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-2 rounded-2xl' >Tailwind test</h1>

      <Card username="Chai aur code" btnText = "click me" />
      <Card username="Christina" />
      
   
    </>
  )
}

export default App

