import {useRef, useState} from 'react'
import './App.css'

function App() {

  const [val, setVal] = useState('')

  // 元素
  const userRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    setVal(userRef.current?.value || '')
    console.log(userRef.current?.className)
  }

  return (
    <>
     <div className='App'>
       <input type='text' ref={userRef} className='red'/>
       <button onClick={handleClick}>按钮</button>
       <p>{val}</p>
     </div>
    </>
  )
}

export default App
