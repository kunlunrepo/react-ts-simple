import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  // 页面渲染后
  useEffect(() =>{
    document.title = 'react测试'
  }, [])

  // 页面渲染后
  useEffect(() =>{
    console.log('页面渲染后')
    setCount(count + 1)
  }, []) // 注意依赖项，不填任何状态都会触发

  // count发生变化后
  useEffect(() =>{
    setTotal(count * 5)
  }, [count]) // 依赖指定项

  // 页面销毁前
  useEffect(() =>{
    console.log('页面销毁前1')
    const T = setInterval(() => {
      // setCount( count + 1) // 注意闭包作用 count始终是0
      setCount(preCount => preCount + 1) // 不clear值会混乱
    }, 1000)

    return () => {
      console.log('页面销毁前')
      clearInterval(T)
    }
  }, [])

  // 自定义hook
  const [size, setSize] = useState(
    {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  )
  // 监听窗口变化
  const handleResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  useEffect(() =>{
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize',  handleResize)
    }
  }, [])

  return (
    <>
      <div className='App'>
        <p>欢迎学习react开发</p>
        <p>count: {count} total: {total}</p>
        <p>窗口大小 宽度：{size.width} 高度：{size.height}</p>

      </div>
    </>
  )
}

export default App
