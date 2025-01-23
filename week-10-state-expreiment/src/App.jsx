import { useState, useContext, createContext } from 'react'
import './App.css'

const BulbContext = createContext()

function BulbProivider({ children } ) {
  const [on, setOn] = useState(true)
  return (
    <BulbContext.Provider value={{ on, setOn }}>
      { children }
    </BulbContext.Provider>
  )
}

function App() {

  return (
    <div>
      <BulbProivider>
        <LightBulb />
      </BulbProivider>
    </div>
  )
}

function LightBulb() {
  return (
    <div>
      <Bulb />
      <ToggleBulb />
    </div>
  )
}

function Bulb() {
  const { on } = useContext(BulbContext)
  
  return (
    <div>
      { on ? 'On' : 'Off' }
    </div>
  )
}

function ToggleBulb() {
  const { setOn } = useContext(BulbContext);

  function toggle() {
    setOn(currtstate => !currtstate)
  }
  return (
    <div>
      <button onClick={toggle}>
        Toggle
      </button>
    </div>
    
  )
}

export default App
