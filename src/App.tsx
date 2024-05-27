import './App.css'

function App() {

  // 变量-字符串
  const name = 'jack'
  // 变量-节点
  const h1 = <h1>欢迎学习react开发</h1>
  // 条件判断
  const isAdmin = true
  // 样式
  const style = {
    color: 'red',
    fontSize: '20px'
  }
  const loginName = <span style={style}>kunlunrepo</span>

  return (
    <>
      <div className='App'>
        <p>{name}</p>
        {h1}
        {isAdmin ? <span>管理员</span> : <span>游客</span>}
        {loginName}

      </div>
    </>
  )
}

export default App
