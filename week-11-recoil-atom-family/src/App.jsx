import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { todoAtomFamily } from './atom'

// todo will be something that we can make in some file or need to call from db

function App() {
  return (
    <RecoilRoot>
      <div>
        <TodoList />
      </div>
    </RecoilRoot>
  )
}

function TodoList() {
  return (
    <div>
      <Todo id={1} />
      <Todo id={2} />
    </div>
  )
}

function Todo({ id }) {
  const todos = useRecoilValue(todoAtomFamily(id))

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} id={todo.id} />)}
    </div>
  )
}

export default App
