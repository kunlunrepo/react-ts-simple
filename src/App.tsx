import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink, useNavigate} from 'react-router-dom'

function App() {

  // 编程式导航
  const navigator = useNavigate()
  const handleClick = () => {
    navigator('/react')
  }

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
        <button onClick={handleClick}>
          点击跳转
        </button>
      </div>
    </>
  )
}

export default App
