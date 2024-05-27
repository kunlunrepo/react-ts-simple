import { useState, useEffect } from "react";
export function useWindowSize() {
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

  return [size]
}

