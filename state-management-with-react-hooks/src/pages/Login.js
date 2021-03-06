import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth/auth";
import { Link, Redirect } from 'react-router-dom';
import { login } from '../api/user';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  async function postLogin() {
    try {
      const result = await login(userName, password)
      if (result.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: result.data,
        });
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
      <div className="input-field">
        <input
          type="text"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="User name"
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