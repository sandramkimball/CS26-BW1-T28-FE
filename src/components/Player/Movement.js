const moveInput = ({e, playerTop, playerLeft, setPlayerTop, setPlayerLeft}) => {
    const player_size = 80;
    const map_width = 800;
    const map_height = 480;
    const direction = getDirection(e)

    function firstMove(e){
        const oldPos = [playerTop, playerLeft] //player[y][x]
        const newPos = getNewPosition(direction)
        const direction = getDirection(e)
        if(mapBounderies(oldPos, newPos) && pathBoundaries(oldPos, newPos)){
            return newPos
        }
    }

    function getDirection(e){ //aka handleKeyDown
        switch(e.keyCode){
            case 37: 
                console.log('w')
               return direction = 'w'
            case 39: 
                console.log('e')
                return direction = 'e'
            case 38: 
                console.log('n')
                return direction = 'n'
            case 40: 
                console.log('s')
                return direction = 's'
        }
    }

    function getNewPosition(direction){ 
       switch(direction){
            case 'w': 
                return setPlayerLeft(playerLeft-80)
            case 'e': 
                return setPlayerLeft(playerLeft+80)
            case 'n': 
                return setPlayerTop(playerTop-80)
            case 's': 
                return setPlayerTop(playerTop+80)
        }
    }

    function mapBounderies(oldPos, newPos){
        return (newPos[0] >= 0 && newPos[0] <= map_width - player_size) &&
            (newPos[1] >= 0 && newPos[1] <= map_height)
            ? newPos : oldPos
    }

    function pathBoundaries(oldPos, newPos, tiles){
        // const tiles = props.map.tiles
        const y = newPos[1] / 80
        const x = newPos[0] / 80
        const nextTile = tiles[y][x]
        return nextTile === 0
    }

    return firstMove(e)
}

   
// window.addEventListener('keydown', e => { moveInput(e) })

export default moveInput;