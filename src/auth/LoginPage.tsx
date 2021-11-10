import * as React from "react";
import { useLogin, useNotify, Notification, LoginComponent } from "react-admin";

const LoginPage: LoginComponent = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = useLogin();
  const notify = useNotify();
  const submit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const loginResult = await login({ username: email, password });
    console.log(loginResult);
    notify("You screwed up", "error");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type={"submit"}>Login</button>
      </form>
      <Notification />
    </>
  );
};

export default LoginPage;
