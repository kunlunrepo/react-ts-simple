import {createBrowserRouter, Navigate, Link, useParams, Outlet} from "react-router-dom";

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

function Order() {
  const params = useParams()
  return <h2>这是一个订单组件 订单： {params.orderId}</h2>
}

function Groods() {
  const params = useParams()
  return <h2>这是一个商品组件 商品： {params.goodsId} 订单：{params.orderId}</h2>
}

function Groods2() {
  return <div>
    <h2>这是一个商品组件2 </h2>
    <Outlet />
  </div>
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
      path: '/order/:orderId',
      element: <Order/>
    },
    {
      path: '/goods/:goodsId/order/:orderId',
      element: <Groods/>
    },
    {
      path: '/goods',
      element: <Groods2/>,
      children: [
        {
          path: 'list',
          element: <div>
            <p>商品1</p>
            <p>商品2</p>
            <p>商品3</p>
          </div>
        },
        {
          path: 'cart',
          element: <div>
            <p>苹果手机，价格5999</p>
            <p>小米手机，价格3999</p>
            <p>华为手机，价格4999</p>
          </div>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound/>,
    }
  ],
  // 基础路由
  {
    basename: '/app'
  })


export default router
