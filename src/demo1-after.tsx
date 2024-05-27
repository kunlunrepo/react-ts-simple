import React, {useContext} from "react";

// 创建上下文
const UserContext = React.createContext({name: ''});


function AppAfter() {
  return (
    // 包裹传递的值
    <UserContext.Provider value={{name: 'jack'}}>
      <div>
        <p>欢迎学习React开发-修改后</p>
        <Child1/>
      </div>
    </UserContext.Provider>
  )
}


function Child1() {
  return (
    <div>
      <p><span>Child1</span></p>
      <p><Child2/></p>
    </div>
  )
}

function Child2() {
  // 获取上下文
  const {name} = useContext(UserContext);
  return <span>Child2 祖先组件传递的值：{name}</span>
}

export default AppAfter;
