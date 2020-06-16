import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import "./main.css";
import Gameboard from '../Gameboard/Gameboard';
import astronaut from '../../images/astronaut-front.png'


function Main() {
  const [marsChambers, setMarsChambers] = useState();
  const [gameinfo, setGameInfo] = useState()
  const [gameStats, setGameStats] = useState()
  const [direction, setDirection] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadErr, setLoadErr] = useState(false)

  const initiateGame = ()=> {
    axiosWithAuth()
      .get("/api/adv/init")
      .then(res => {
        let moveChamber = {
          type: 'chamber',
          chamber: `${res.data.title}`,
          text: `${res.data.description}`
        }
        setMarsChambers(res.data.mars_map)
        setGameInfo(res.data)
        setLoading(false)
        setGameStats([moveChamber])

      })
      .catch(err => {
        console.log('ERROR PINGING SERVER:', err);
        setLoadErr(true)
      });
  }


  useEffect(()=> {
    initiateGame()
  }, [])

  return (
    <div className='main'>
      <div className='container'>
        <img src={astronaut} alt='astronaut cartoon'/> 
        {loading=== false && ( 
          <>
            <Gameboard 
              gameinfo={gameinfo} 
              marsChambers={marsChambers} 
              direction={direction} 
              setDirection={setDirection}
            /> 
            <p>Welcome Captain {gameinfo.name}. Use the arrow keys to explore Mars. Good luck. </p> 
          </>
        )}
      </div>

      {loading === true && ( <p className='loading'>Loading...</p> )}

      {loadErr === true && ( <p>Error Loading Game</p> )}

    </div>
  );
}

export default Main;
