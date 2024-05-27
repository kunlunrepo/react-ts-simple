import {memo, useCallback, useMemo, useState} from "react";
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const total1 = () => {
    console.log('total1....')
    const list = [1,3,5,7,9]
    return list.reduce((pre, cur) => {
      return pre + cur
    }, 0)
  }

  // 缓存值
  const total2 = useMemo(() => {
    console.log('total2....')
    const list = [1,3,5,7,9]
    return list.reduce((pre, cur) => {
      return pre + cur
    }, 0)
  }, [])

  const handleClick = () => {
    setCount(count + 1)
  }

  // 缓存函数 useCallback
  const handleChildClick = useCallback(() => {
    console.log('子组件点击 update....')
  }, [])

  return (
    <>
      <div className='App'>
        <p>欢迎学习React开发</p>
        <p>
          <span>Count值：{count}</span>
          <button onClick={handleClick}>按钮</button>
        </p>
        <p>{total1()}</p>
        <p>{total2}</p>
        <Child onClik={handleChildClick}/>
      </div>
    </>
  )
}

// 子组件 memo 缓存组件
const Child = memo(
  ({onClik}: any) => {
    console.log('Child组件渲染')
    return (
      <>
        <p>
          Child组件
          <button onClick={onClik}>子节点按钮</button>
        </p>
      </>
    )
  }
)


export default App
