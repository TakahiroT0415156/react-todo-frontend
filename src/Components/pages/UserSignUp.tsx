import axios from "axios";
import { useState } from "react";
import { Input, Button } from "../basic";

export const UserSignUp = () => {
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPassConf, setUserPassConf] = useState("");
  const changeUserMail = (e) => setUserMail(e.target.value);
  const changeUserPass = (e) => setUserPass(e.target.value);
  const changeUserPassConf = (e) => setUserPassConf(e.target.value);

  const createUser = () => {
    axios.post("http://localhost:3001/api/v1/users", {
      user: {
        email: userMail,
        password: userPass,
        passwordConfirmation: userPassConf,
      },
    });
  };

  return (
    <div>
      <h4>新規登録</h4>
      <span>メールアドレスを入力</span>
      <br />
      <Input
        type="email"
        placeholder="メアドを入力"
        onChange={changeUserMail}
      />
      <br />
      <span>パスワードを入力</span>
      <br />
      <Input
        type="password"
        placeholder="パスワードを入力"
        onChange={changeUserPass}
      />
      <br />
      <span>確認のためもう一度</span>
      <br />
      <Input
        type="password"
        placeholder="パスワードを再度入力"
        onChange={changeUserPassConf}
      />
      <br />
      <Button children="登録" onClick={createUser} />
    </div>
  );
};
