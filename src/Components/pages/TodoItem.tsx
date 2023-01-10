import axios from "axios";
import { Button } from "../basic";

export const TodoItem = (props) => {
  const { todo, setTodos } = props;
  const url = "http://localhost:3001/api/v1/posts";

  const deleteTodo = (id) => {
    axios.delete(`${url}/${id}`);
    axios.get(url).then((res) => {
      setTodos(res.data.posts);
    });
  };

  return (
    <div>
      <dt>{todo.title}</dt>
      <dd>{todo.body}</dd>
      <Button children="削除" onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};
