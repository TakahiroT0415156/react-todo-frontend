import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoBody, setTodoBody] = useState("");
  const changeTodoTitle = (e) => setTodoTitle(e.target.value);
  const changeTodoBody = (e) => setTodoBody(e.target.value);

  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassConf, setUserPassConf] = useState("");
  const changeUserMail = (e) => setUserMail(e.target.value);
  const changeUserPass = (e) => setUserPass(e.target.value);
  const changeUserPassConf = (e) => setUserPassConf(e.target.value);

  const [loginMail, setLoginMail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const changeLoginMail = (e) => setLoginMail(e.target.value);
  const changeLoginPass = (e) => setLoginPass(e.target.value);

  const createUser = () => {
    axios.post("http://localhost:3001/api/v1/users", {
      user: {
        email: userMail,
        password: userPass,
        passwordConfirmation: userPassConf,
      },
    });
  };

  const userLogin = () => {
    axios.post("http://localhost:3001/api/v1/login", {
      user: {
        email: loginMail,
        password: loginPass,
      },
    });
  };

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
      post: {
        title: todoTitle,
        body: todoBody,
        completed: false,
      },
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/api/v1/posts/${id}`);
    getTodos();
  };

  return (
    <div className="App">
      <div>
        <h4>新規登録</h4>
        <span>メールアドレスを入力</span>
        <br />
        <input
          type="email"
          placeholder="メアドを入力"
          onChange={changeUserMail}
        />
        <br />
        <span>パスワードを入力</span>
        <br />
        <input
          type="password"
          placeholder="パスワードを入力"
          onChange={changeUserPass}
        />
        <br />
        <span>確認のためもう一度</span>
        <br />
        <input
          type="password"
          placeholder="確認のためもう一度"
          onChange={changeUserPassConf}
        />
        <br />
        <button onClick={createUser}>登録</button>
      </div>

      <div>
        <h4>ログイン</h4>
        <span>メールアドレスを入力</span>
        <br />
        <input
          type="email"
          placeholder="メアドを入力"
          onChange={changeLoginMail}
        />
        <br />
        <span>パスワードを入力</span>
        <br />
        <input
          type="password"
          placeholder="パスワードを入力"
          onChange={changeLoginPass}
        />
        <br />
        <button onClick={userLogin}>ログイン</button>
      </div>

      <div>
        <h4>Todo</h4>
        <span>titleを入力</span>
        <br />
        <input
          type="text"
          placeholder="todoを入力"
          onChange={changeTodoTitle}
        />
        <br />
        <span>bodyを入力</span>
        <br />
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
    </div>
  );
}

export default App;
