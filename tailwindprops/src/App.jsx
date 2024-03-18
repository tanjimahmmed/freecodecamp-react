import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'TJ',
    age: 25,
    address: {
      city: 'Narayanganj',
      state: 'Dhaka',
      country: 'Bangladesh'
    }
  }

  let newArr = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <h1 className='text-3xl bg-green-50 p-3'>Vite with tailwind</h1>
      <Card username="Tanjim" post='Staff Eng.' myArr={newArr} />
    </>
  )
}

export default App
