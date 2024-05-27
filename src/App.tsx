import './App.css'

function App({type}: {type: string}) {

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
  // 循环
  const list = ['Tom', 'Jack', 'Lucy']
  // 事件
  // const useName = "Tom"
  const handleChange = (e: any) => {
    console.log(e.target.value)
  }
  // 属性传值 type


  return (
    <>
      <div className='App'>
        <p>{name}</p>
        {h1}
        {isAdmin ? <span>管理员</span> : <span>游客</span>}
        {loginName}
        <p>用户列表</p>
        {
          list.map((item, index) => {
            return <a key={index}>{item}  </a>
          })
        }
        <p>
          <input type='text' onChange={handleChange}/>
        </p>
        <p>{type}</p>

      </div>
    </>
  )
}

export default App
