import { useState } from 'react'

function App() {
  const [color , setColor] = useState('grey')

  return (
    
      <div className='w-full h-screen duration-200 '
      style={{backgroundColor : color}}
      >
        <div className='fixed flex flex-wrap bottom-12 
        justify-center inset-x-0 px-2'>
          <div className='flex gap-10 bg-white px-6 py-4 rounded-md'>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md' onClick={() => setColor('green')}>green</button>
            <button className='bg-yellow-300 text-white px-4 py-2 rounded-md' onClick={() => setColor('yellow')}>yellow</button>
            <button className='bg-purple-500 text-white px-4 py-2 rounded-md' onClick={() => setColor('purple')}>purple</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => setColor('blue')}>blue</button>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md' onClick={() => setColor('pink')}>pink</button>
            <button className='bg-black text-white px-4 py-2 rounded-md' onClick={() => setColor('black')}>black</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
