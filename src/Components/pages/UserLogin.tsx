import axios from "axios";
import { useState } from "react";
import { Input, Button } from "../basic";

export const UserLogin = () => {
  const [loginMail, setLoginMail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const changeLoginMail = (e) => setLoginMail(e.target.value);
  const changeLoginPass = (e) => setLoginPass(e.target.value);

  const userLogin = () => {
    axios.post("http://localhost:3001/api/v1/login", {
      user: {
        email: loginMail,
        password: loginPass,
      },
    });
  };
  return (
    <div>
      <h4>ログイン</h4>
      <span>メールアドレスを入力</span>
      <br />
      <Input
        type="email"
        placeholder="メアドを入力"
        onChange={changeLoginMail}
      />
      <br />
      <span>パスワードを入力</span>
      <br />
      <Input
        type="password"
        placeholder="パスワードを入力"
        onChange={changeLoginPass}
      />
      <br />
      <Button children="ログイン" onClick={userLogin} />
    </div>
  );
};
