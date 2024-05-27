import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavLink to="/react">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </NavLink>
        <NavLink to="/vite">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </NavLink>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
