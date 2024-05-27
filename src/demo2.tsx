import React, {useContext, useReducer} from "react";

// 创建上下文
const UserContext = React.createContext({});


function AppAfter() {

  // 更改状态
  const reducer = (state: string, action: { type: string, name: string}) => {
    switch (action.type) {
      case 'update_name':
        return action.name
      default:
        return state;
    }
  }

  // 初始化
  const [name, dispatch] = useReducer(reducer, '');

  return (
    // 包裹传递的值
    <UserContext.Provider value={{name, dispatch}}>
      <div>
        <p>欢迎学习React开发-demo2</p>
        <Child1/>
        <Child2/>
      </div>
    </UserContext.Provider>
  )
}


function Child1() {
  // 获取上下文
  const {dispatch}: any = useContext(UserContext);

  const handleClick = () => {
    dispatch({
      type: 'update_name',
      name: Math.random() + ''
    })
  }

  return (
    <div>
      <p><span>Child1</span></p>
      <button onClick={handleClick}>按钮</button>
    </div>
  )
}

function Child2() {
  // 获取上下文
  const { name }: any = useContext(UserContext);
  return <span>Child2 ：{name}</span>
}

export default AppAfter;
