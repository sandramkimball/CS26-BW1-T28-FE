import React, { useState } from "react";
import { axiosWithAuth } from '../components/utils/axiosWithAuth';
import { Link } from "react-router-dom";
import "./login.css";

export default function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e, state) => {
    e.preventDefault();
    return axiosWithAuth()
      .post("api/login", state)
      .then(res => {
        console.log("Logging in");
        localStorage.setItem("token", res.data.key);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    setState({
      username: "",
      password: ""
    });
  };

  return (
    <div className="wrapper">
      <div className="signup-text">{/* <GlobalStyles /> */}</div>
      <form
        style={{
          textAlign: "center",
          height: "620px",
          width: "100%",
          height: "100vh",
        }}
        onSubmit={e => submitHandler(e, state)}
      >
        <div>
          <div className="title"> Sign in to your account </div>
          {/* <img src={dragon} style={{ width: "7.5rem" }} /> */}

          <div className="label"> Username </div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={state.username}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <div className="label"> Password </div>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            required
          />
        </div>
        <button
          className="signup-btn"
          style={
            state.email && state.password
              ? { backgroundColor: "blue" }
              : {
                  color: "black",
                  backgroundColor: "f3f5f1",
                  fontWeight: "bold",
                  marginTop: "20px"
                }
          }
        >
          Login
        </button>
        <div>
          <div className="bottom">Don't have an account?</div>
          <div>
            <Link to="/registration">
              <div className="signup">SIGN UP</div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}