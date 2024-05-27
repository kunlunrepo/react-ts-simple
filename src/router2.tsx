import {createBrowserRouter, Navigate, Link, useParams, Outlet, redirect, useLoaderData, Form, useActionData} from "react-router-dom";

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

function Login() {
  const errors: any = useActionData()
  return <Form method="post">
    <p>
      <input type="text" name="email" />
      {errors?.email && <span>{errors.email}</span>}
    </p>

    <p>
      <input type="text" name="password" />
      {errors?.password && <span>{errors.password}</span>}
    </p>

    <p>
      <button type="submit">登录</button>
    </p>
  </Form>
}

function Apple() {
  return <h2>这是一个苹果组件2</h2>
}

function Order() {
  // 获取loader处理后的值
  const data = useLoaderData();
  console.log('Order...', data)
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
    <Outlet/>
  </div>
}

// 先执行loader，再执行组件
function orderLoader({params}: any) {
  console.log('orderLoader init', params.id)
  // return redirect('/login')
  // 可以做权限拦截验证
  return  fetch(`/${params.id}.json`)
  // return {
  //   id: params.id,
  //   userName: 'jack'
  // }
}

async function loginAction({request}: any) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const errors: any = {
  };

  // validate the fields
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email =
      "请填入邮箱";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "密码必须大于6位";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  // 条件满足
  console.log("创建用户成功")
  return redirect("/");
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/order/:id',
    element: <Order/>,
    loader: orderLoader
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction
  },
  {
    path: '*',
    element: <NotFound/>,
  },
])


export default router
