import React from 'react'
import GameMap, { tiles } from './GameMap'
import Player from '../Player/Player'
import Alien from '../Alien/Alien'
import './gameboard.css'



function Gameboard({ gameInfo}){   
    // console.log(tiles)
    return(
        <div className='gameBoard'>
            <GameMap mars_map={gameInfo.mars_map} gameInfo={gameInfo}/>
            <Player gameInfo={gameInfo} />
            <Alien gameInfo={gameInfo}/>
        </div>
    )
}

export default Gameboard;
