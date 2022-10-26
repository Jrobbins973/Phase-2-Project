import React, {useState} from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseContainer(props) {
    
    const {filterExercises} = props
    
   


    const renderExercises = filterExercises.map(exercise => 
    
    <ExerciseCard

    key={exercise.id}
    exercise={exercise}
    />)

    return <div className="ui grid container">
        {renderExercises}
    </div>
}

export default ExerciseContainer