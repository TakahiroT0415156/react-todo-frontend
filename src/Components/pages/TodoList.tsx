import axios from "axios";
import { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const url = "http://localhost:3001/api/v1/posts";

  const getTodos = () => {
    axios.get(url).then((res) => {
      setTodos(res.data.posts);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <TodoForm setTodos={setTodos} />
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
      })}
    </div>
  );
};
