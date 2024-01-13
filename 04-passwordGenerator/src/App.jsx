import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [allowedNumber, setAllowedNumber] = useState(false)
  const [allowedChar, setAllowedChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowedNumber) str += "0123456789" 
    if (allowedChar) str += "!@#$%&'()*+,-./:;<=>?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length) + 1);
      
      pass += str.charAt(char);
      console.log(pass)
    }
    setPassword(pass);
  }, [length, allowedNumber, allowedChar, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() =>{
    passwordGenerator()
  },[length,allowedNumber,allowedChar, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
     rounded-lg px-4 py-3 my-8 text-white bg-gray-700'>
        <h1 className='text-center font-bold mb-2 text-white'>Password Generator</h1>
        <div className='flex shadow 
     rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-3 px-3 text-gray-700'
            placeholder='password'
            readOnly={true}
          />
          <button className='bg-blue-500 text-white px-1'
          onClick={copyPasswordToClipboard}>copy</button>
        </div>

        <div className='flex  text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
            <input 
             type="range"
             min={6}
             max={50}
             value={length}
             onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
             type="checkbox" 
             defaultChecked={allowedNumber}
             id='numberInput'
             onChange={() => {
              setAllowedNumber((prev) => (!prev))
             }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
             type="checkbox" 
             defaultChecked={allowedChar}
             id='charInput'
             onChange={() => {
              setAllowedChar((prev) => (!prev))
             }}
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
