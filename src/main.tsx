import ReactDOM from 'react-dom/client'
import './index.css'

import { HashRouter, RouterProvider} from 'react-router-dom'
// import BaseRouter from "./router1.tsx";
import router from "./router2.tsx";



ReactDOM.createRoot(document.getElementById('root')!).render(
  /*<BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/react' element={<ReactDemo />}></Route>
      </Routes>
    </React.StrictMode>,
  </BrowserRouter>*/
  /*<HashRouter>
    <React.StrictMode>
      <BaseRouter/>
    </React.StrictMode>
  </HashRouter>*/
  <RouterProvider router={router} />
)
