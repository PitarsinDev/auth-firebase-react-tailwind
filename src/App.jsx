import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className='text-center p-10 text-3xl text-indigo-600'>Welcome Page</h3>
      <br />
      <br />
      <div className='flex justify-center items-center'>
          <Link to="/login" className='bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-full mx-2 transition '>Login</Link>
          <Link to="/register" className='bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-full mx-2 transition '>Register</Link>
      </div>
    </>
  )
}

export default App
