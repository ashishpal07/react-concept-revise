import axios from "axios";

export const fetchBlogs = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return response.data;
}

export default async function getBlogs() {

  const blogs = await fetchBlogs();

  return (
    <div>
      {(blogs as ITodo[]).map((todo: ITodo) => {
        return (<Todo title={todo.title} completed={todo.completed} />)
      })}
    </div>
  )
}

interface ITodo {
  title: string;
  completed: boolean;
}

function Todo({ title, completed }: ITodo) {
  return (
    <div>
      { title } { completed ? "Completed.": "Not Completed." }
    </div>
  )
}
