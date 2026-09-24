import React from 'react'
import ChildComponent from './ChildComponent'
import Counter from './Counter'

const App = () => {
  const user = {
    name: 'Krishna',
    section: 'CSE-18',
    email: 'kpandey8320@gmail.com'
  }

  return (
    <div>
      <ChildComponent user={user} />
      <Counter />
    </div>
  )
}

export default App;