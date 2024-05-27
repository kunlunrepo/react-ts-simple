import './App.css'

function App() {

  const name = 'Jack'

  return (
    <>
      <div>
        <p>欢迎学习React开发</p>
        <Child1 name={name} />
      </div>
    </>
  )
}

function Child1({name} : any) {
  return (
    <div>
      <p><span>Child1</span></p>
      <p><Child2 name={name}/></p>
    </div>
  )
}

function Child2({name} : any) {
  return <span>Child2 祖先组件传递的值：{name}</span>
}

export default App
