import React, { useState } from 'react'
import martian from '../../images/alien-1.png'

/* 
    GAMEFLOW:

    1. First Move
    2. Get Direction => setDirection to n, s, e, w
    3. Get Next Position => Check direction and set newPos
    4. 

    To avoid the keypress/repeat delay, wrap the program in a loop
    and make the state of the keyboard is available in the scope of that loop.
    Then to monitor multiple keypresses, 
    you need to keep track of individual keydown and keyup events:

    keyup( function, 200ms )

*/

function Alien(){
    const alien_size = 80;
    const [alienTop, setAlienTop] = useState(240)
    const [alienLeft, setAlienLeft] = useState(320)
    const oldPos = [alienTop, alienLeft] 
    const [alienPos, setAlienPos] = useState(oldPos)

    function getNewPosition(oldPos){
        console.log('alienPos:', oldPos)
        if( alienPos === oldPos ){
            setAlienLeft( alienLeft+80 )
        }
        else {
            setAlienLeft( alienLeft-80 )
        }
        console.log('alienPos:', oldPos)
    };

    async function getNewPosition(){
        if( alienLeft === 240 ){
            await setAlienLeft( alienLeft+80 )
        }
        else {
            await setAlienLeft( alienLeft-80 )
        }
    };

    function handleMoveAlien(){
        setInterval( ()=> { getNewPosition() }, 5000 );
    };
    
    // Initiate alien
    // handleMoveAlien()
    

    return(
        <div
            style={{
                position: 'absolute',
                top: alienTop, 
                left: alienLeft,
                backgroundImage: `url('${martian}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 0',
                width: '80px',
                height: '80px',
                backgroundSize: 'contain'
            }}
        />
    )
}

export default Alien;