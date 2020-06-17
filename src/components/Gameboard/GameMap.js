import React from 'react'


function GameMap( {gameInfo, mars_map} ){
    const player_size = 80;
    const map_width = 480;
    const map_height = 800;
    const validChambers=[]
    console.log(mars_map)
    
    //creates arr based on connected rooms
    mars_map.forEach(room => {
        const directions=['n_to', 's_to', 'e_to', 'w_to']
        directions.forEach( dir => {
            if((room[dir]) && validChambers.length < 60){
                validChambers.push( getTileType(room.title) )
            }
        })
    })  

    const tiles = mapTiles(validChambers)

    // breaks arr into 2D array 
    function mapTiles( arr ){
        return arr.reduce((rows, key, index) => (index % 6 === 0 ?
        rows.push([key]) : rows[rows.length-1].push(key)) && rows, []
        )
    }

    function getTileType(title){
        switch(title){
            case 'Outside':
                return 0
            case 'Dirt':
                return 1
            case 'Bunker':
                return 2
            case 'Port Hole':
                return 3
            case 'Space Ship':
                return 4
            case 'the Decent':
                return 5
            case 'Hell':
                return 6
            case 'Wall':
                return 7
            case 'Barrier':
                return 8
        }
    }

    function getTileImg(type){
        switch(type){
            case 0:
                return 'red-soil'
            case 1:
                return 'path'
            case 2:
                return 'concrete-path'
            case 3:
                return 'door'
            case 4:
                return 'metal'
            case 5:
                return 'crystal'
            case 6:
                return 'lava'
            case 7:
                return 'wall'
            case 8:
                return 'wall2'
        }
    }

    function MapTile(props){
        return <div 
            className={`tile ${getTileImg(props.value)}`}
            style={{
                height: '80px',
                width: '80px',
            }}/>
    }

    function MapRow(props){
        return <div className='map_row'>
                    { props.tiles.map(tile=> <MapTile value={tile} />) }
                </div>
    }
    

    return(
        <div className='map_display'>
            { tiles.map(row=> <MapRow tiles={row} />) }
        </div>
    )
}
// console.log(tiles)
export default GameMap;


    