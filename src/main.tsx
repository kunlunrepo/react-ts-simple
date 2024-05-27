import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function ReactDemo() {
  return <div>React Demo</div>
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/react' element={<ReactDemo />}></Route>
      </Routes>
    </React.StrictMode>,
  </BrowserRouter>

)
