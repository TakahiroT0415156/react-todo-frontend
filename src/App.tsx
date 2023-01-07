import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoBody, setTodoBody] = useState("");
  const changeTodoTitle = (e) => setTodoTitle(e.target.value);
  const changeTodoBody = (e) => setTodoBody(e.target.value);

  const getTodos = () => {
    axios
      .get("http://localhost:3001/api/v1/posts")
      .then((res) => {
        setTodos(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createTodo = () => {
    axios.post("http://localhost:3001/api/v1/posts", {
      title: todoTitle,
      body: todoBody,
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/api/v1/posts/${id}`);
    getTodos();
  };

  return (
    <div className="App">
      <span>titleを入力</span>
      <input type="text" placeholder="todoを入力" onChange={changeTodoTitle} />
      <br />
      <span>bodyを入力</span>
      <input type="text" placeholder="todoを入力" onChange={changeTodoBody} />
      <br />
      <button onClick={createTodo}>todo作成</button>
      <br />
      <button onClick={getTodos}>データ取得</button>
      <dl>
        {todos.map((todo) => (
          <div>
            <dt>{todo.title}</dt>
            <dd>
              {todo.body}
              <button onClick={() => deleteTodo(todo.id)}>削除</button>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default App;
