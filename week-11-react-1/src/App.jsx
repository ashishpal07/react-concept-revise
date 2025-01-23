import { useState } from 'react'
import './App.css'

function App() {
  const { count, increseCount, decreseCount } = useCounter();

  return (
    <div>
      <button onClick={increseCount} > Increase Count </button>
      <div> { count } </div>
      <button onClick={decreseCount} > Decrease Count </button>
    </div>
  )
}

function useCounter() {
  const [count, setCount] = useState(0)

  function increseCount() {
    setCount(count => count + 1);
  }

  function decreseCount() {
    setCount(count => count - 1);
  }

  return {
    count,
    increseCount,
    decreseCount
  };
}

export default App
