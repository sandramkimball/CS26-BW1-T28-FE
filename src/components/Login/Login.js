import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./login.css";

export default function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [loginError, setError] = useState(false)

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e, user) => {
    e.preventDefault();
    axios.post("https://cs1build.herokuapp.com/api/login/", user)
      .then(res => {
        localStorage.setItem("token", res.data.key);
        localStorage.setItem("user", user.username);
        props.history.push("/game");
      })
      .catch(err => {
        console.log('login error', err);
        setError(true)
      });
  };

  return (
    <div className="login-pg">
      <form onSubmit={e => submitHandler(e, user)}>
        <h2> WELCOME, EXPLORER </h2>

        <div>
          <label> USERNAME: </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <label> PASSWORD: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={changeHandler}
            required
          />
        </div>
        {loginError === true && ( <p>Error logging in. Try again. </p>)}
        <button onSubmit={e => submitHandler(e, user)}> LOGIN </button>
        <button><Link to="/registration" className="signup">SIGNUP</Link></button>
      </form>
    </div>
  );
}