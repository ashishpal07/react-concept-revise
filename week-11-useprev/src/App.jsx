import { useState } from 'react'
import './App.css'
import { usePrev } from './assets/hooks/usePrev';

function App() {
  const [count, setCount] = useState(0);
  const prevVlaue = usePrev(count);


  return (
    <div>
      { count }
      <button onClick={() => setCount(count + 1)}> increase </button>
      <div>Previous value: {prevVlaue}</div>
    </div>
  )
}

export default App
