import React from "react";

function ExerciseSearch(props){
    const {handleExerciseSearch} = props

    return <input 
    onChange={handleExerciseSearch} 
    className ="search" 
    type="text" 
    placeholder="Where is your pain / tightness?"></input>
}

export default ExerciseSearch
