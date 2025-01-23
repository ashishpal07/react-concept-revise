import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(function(count) { return count + 1})
    }, 1000);
  }, [])

  return (
    <div> 
      <button>Count { count }</button>
    </div>
  )
}

export default App
