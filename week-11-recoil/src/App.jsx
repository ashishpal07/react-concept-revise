import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { counterAtom } from './store/atom/counterAtom';

function App() {
  return (
    <RecoilRoot>
      <div>
        <Counter />
      </div>
    </RecoilRoot>
  )
}

function Counter() {
  const currentCount = useRecoilValue(counterAtom);

  return (
    <div>
      <IncreaseButton />
      <span>{currentCount}</span>
      <DecreaseButton />
    </div>
  )
}

function IncreaseButton() {
  const setCount = useSetRecoilState(counterAtom)

  return (
    <button type="button" onClick={ () => setCount(prevCount => prevCount + 1) } >+</button>
  )
}

function DecreaseButton() {
  const setCount = useSetRecoilState(counterAtom)

  return (
    <button type="button" onClick={ () => setCount(prevCount => prevCount - 1) } >-</button>
  )
}

export default App
