import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-5'>Tailwind Test</h1>
     <Card username="this is my cards" btnText="click me" />
     <Card username="this is second card"/>
    </>
  )
}

export default App
