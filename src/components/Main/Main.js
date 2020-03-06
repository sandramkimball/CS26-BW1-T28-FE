import React from "react";
import axios from "axios";
import "./main.css";


function Main() {

  const getData = (e, state) => {
    e.preventDefault();
    axios
      .get("http://127.0.0.1:8000/api/adv/chambers", state)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to Mars Underground</h1>
    </div>
  );
}

export default Main;
