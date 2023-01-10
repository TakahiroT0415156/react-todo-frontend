import axios from "axios";
import { useState } from "react";
import { Input, Button } from "../basic";

export const TodoForm = ({ setTodos }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoBody, setTodoBody] = useState("");
  const changeTodoTitle = (e) => setTodoTitle(e.target.value);
  const changeTodoBody = (e) => setTodoBody(e.target.value);

  const url = "http://localhost:3001/api/v1/posts";

  const createTodo = () => {
    if (!todoTitle && !todoBody) return;
    axios.post(url, {
      post: {
        title: todoTitle,
        body: todoBody,
        completed: false,
      },
    });
    setTodoTitle("");
    setTodoBody("");
    axios.get(url).then((res) => {
      setTodos(res.data.posts);
    });
  };

  return (
    <div>
      <span>titleを入力</span>
      <Input type="text" placeholder="todoを入力" onChange={changeTodoTitle} />
      <br />
      <span>bodyを入力</span>
      <Input type="text" placeholder="todoを入力" onChange={changeTodoBody} />
      <br />
      <Button children="todo作成" onClick={createTodo} />
    </div>
  );
};
