import React, { useEffect, useState } from 'react'

const App = () => {
  const [count , setcount] = useState(0);
  const increment = () => {
    setcount(count+1);
    console.log("increment onclick");
  }

  useEffect(() => {
    document.title = `count:${count}`;
    console.log("Component render.")
  })
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App