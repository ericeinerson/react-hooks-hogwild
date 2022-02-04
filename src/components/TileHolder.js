import React from "react"
import Tile from "./Tile";

function TileHolder({hogs}){
    // console.log(hogs)
    return (
        <div>
            {hogs.map((hog) => {
                {/* <Tile hog={hog}/> */}
                <p>Hello World</p>
            })}
        </div>
    )
}

export default TileHolder