import {useState, useTransition} from 'react'
import './App.css'

function App() {

  const [query, setQuery] = useState('')
  const [list, setList] = useState<any>([])

  const [isPendding, startTransition] = useTransition()

  const handleChange = (e: any) => {
    setQuery(e.target.value)
    // 增加过度效果
    startTransition(() => {
      // 模拟填充数据
      const arr = Array.from({ length: 5000}).fill(1)
      setList([...list, ...arr])
    })
  }

  return (
    <>
      <div className='App'>
        <input type='text' onChange={handleChange} value={query}/>
        <div>
          {
            isPendding ?
              <div>loading...</div>
              : list.map((item: number, index: number) => {
              return <p key={index}>{item}：{query}</p>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
