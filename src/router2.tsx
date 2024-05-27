import {createBrowserRouter, Navigate, Link} from "react-router-dom";

import App from "./App.tsx";

function ReactDemo() {
  return <div>React Demo <Link to="/">Back</Link></div>
}

function ViteDemo() {
  return <div>Vite Demo</div>
}

function Test() {
  return <div>Test Demo {<Navigate to='/react'/>}</div>
}

function NotFound() {
  return <div>404 当前页面不存在</div>
}

function Apple() {
  return <h2>这是一个苹果组件2</h2>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/react',
    element: <ReactDemo/>,
  },
  {
    path: '/vite',
    element: <ViteDemo/>,
  },
  {
    path: '/test',
    element: <Test/>,
  },
  {
    path: '/apple',
    element: <Apple/>,
  },
  {
    path: '*',
    element: <NotFound/>,
  },
])


export default router
