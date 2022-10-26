import React from "react";

function ExerciseSearch(props){
    const {handleSearch} = props

    return <input onChange={handleSearch} className ="search" type="text" placeholder="Where is your pain / tightness?"></input>
}

export default ExerciseSearch