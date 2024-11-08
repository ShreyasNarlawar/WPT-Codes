import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Home/>
      {/* <About/> */}
      </div>
    </>
  )
}

export default App
