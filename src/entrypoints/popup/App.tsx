import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import wxtLogo from '/wxt.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sessionName = 'WXT + React'

  return (
    <>
      <h1>You are running {sessionName}</h1>
    </>
  )
}

export default App
