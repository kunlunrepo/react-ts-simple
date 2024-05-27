import './App.css'

function App() {

  // 变量-字符串
  const name = 'jack'
  // 变量-节点
  const h1 = <h1>欢迎学习react开发</h1>

  return (
    <>
      <div className='App'>
        <p>{name}</p>
        {h1}
      </div>
    </>
  )
}

export default App
