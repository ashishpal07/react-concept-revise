import { useFetch } from './hooks/useFetch'
import './App.css'

function App() {
  const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/posts')

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
