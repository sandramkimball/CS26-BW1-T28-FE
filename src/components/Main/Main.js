import React, {useState, useEffect} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import "./main.css";


function Main() {
  const [marsMap, setMarsMap] = useState(null);

  const initiateGame = e => {
    e.preventDefault();
    return axiosWithAuth()
      .get("api/adv/init")
      .then(res => {
        console.log('MAIL CALL', res)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='main'>
      <h1>Welcome to Mars Underground</h1>
      <img src='https://i.pinimg.com/originals/fe/2c/64/fe2c646744bf4b17d310aed8240aedb3.png'/>

      <div className='map_display'>
        <p>Test Room</p>
        {/* {marsMap.forEach(chamber=> (
           <p>{chamber.title}</p>
        ))} */}
      </div>

    </div>
  );
}

export default Main;
