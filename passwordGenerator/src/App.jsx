import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i <= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1>Password generator</h1>
          <div>
            <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5'>Copy</button>
          </div>
          <div>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}} />
          <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div>
          <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => {setCharAllowed((prev) => !prev)}} />
          <label htmlFor='characterInput'>Characters</label>
          </div>
      </div>
    </>
  )
}

export default App
