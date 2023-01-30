import { useState } from "react";
import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`login`);
  };
  return (
    <div className="login-container">
      login
      <div className="header">Don't have an account yet?</div>
      <div className="title col-4 mx-auto">PROJECT REACTJS</div>
      <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
      <div className="content-form col-4 mx-auto">
        <lable>Email</lable>
        <input
          type={"email"}
          className="form-control"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <lable>Password</lable>
        <input
          type={"password"}
          className="form-control"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span>Forgot password?</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login to PROJECT REACTJS
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
