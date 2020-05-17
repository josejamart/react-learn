import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/auth";
import { Link, Redirect } from 'react-router-dom';
import { login } from '../api/user';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login: authLogin } = useContext(AuthContext);

  async function postLogin() {
    try {
      const result = await login(userName, password)
      if (result.status === 200) {
        authLogin(result.data)
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div>
        <input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={() => {
          postLogin()
        }}>Sign In</button>
      </div>
      <Link to="/signup">Don't have an account?</Link>
      {isError && <span>The username or password provided were incorrect!</span>}
    </div>
  );
}

export default Login;