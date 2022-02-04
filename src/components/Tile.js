import React from "react"

function Tile({ 
    name, 
    weight, 
    specialty, 
    medal, 
    greased, 
    image="" }){
    return (
        <div>
        <h3>Name: {name}</h3> 
        <image src={image}></image>
        <div id="hog-details">
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased: {greased}</p>
            <p>Highest Medal Achieved: {medal}</p>
        </div>   
        </div>
    )
}

export default Tile