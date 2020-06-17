import React from 'react'

function GameMap({gameInfo, mars_map}){
    const player_size = 80;
    const map_width = 480;
    const map_height = 800;
    const validChambers=[]
    
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
    console.log('tiles', tiles)
 
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
            case 'Space Ship':
                return 4
            case 'Port Hole':
                return 5
            case 'the Decent':
                return 6
        }
    }

    function getTileImg(type){
        switch(type){
            case 0:
                return 'dirt'
            case 1:
                return 'path'
            case 2:
                return 'concrete'
            case 4:
                return 'metal'
            case 5:
                return 'crystal'
            case 6:
                return 'lava'
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
                    { props.tiles.map(tile=> <MapTile value={tile}/>) }
                </div>
    }

    

    

    return(
        <div className='map_display'>
            { tiles.map(row=> <MapRow tiles={row}/>) }
        </div>
    )
}

export default GameMap;

    // const tiles = {
        //     chambers: [
        //         ...marsChambers.map(chamber=> {
        //             return {
        //                 ...chamber,
        //                 x: chamber.x * 10,
        //                 y: chamber.y * -10,
        //                 color: chamber.id === gameInfo.chamber_id ? 'brown' : 'black',
        //                 strokeColor: chamber.id === gameInfo.chamber_id ? 'pink' : 'none',
        //                 size: chamber.id === gameInfo.cahmber_id ? 200 : 'same'
        //             };
        //         }),
        //         ...adjacentChambers.map(chamber=> {
        //             return{
        //                 ...chamber,
        //                 x: chamber.x * 10,
        //                 y: chamber.y * -10,
        //                 color: chamber.id === gameInfo.chamber_id ? 'brown' : 'black',
        //                 strokeColor: chamber.id === gameInfo.chamber_id ? 'purple' : 'none',
        //                 size: chamber.id === gameInfo.cahmber_id ? 200 : 100
        //             };
        //         })
        //     ],
            // links: [...southLinks, ...eastLinks]
    // }

    