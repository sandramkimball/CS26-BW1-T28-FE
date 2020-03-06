import React, {useState, useEffect} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import "./main.css";


function Main() {
  const [directions, setDirection] = useState('');
  const [marsMap, setMarsMap] = useState(null);

  const initiateGame = e => {
    e.preventDefault();
    return axiosWithAuth()
      .get("api/adv/init")
      .then(res => {
        console.log('gOT mAIL', res)
        setMarsMap(res.data.chambers)
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <div>
      <h1>Welcome to Mars Underground</h1>
      <img src='https://i.pinimg.com/originals/fe/2c/64/fe2c646744bf4b17d310aed8240aedb3.png'/>
    </div>
  );
}

export default Main;
