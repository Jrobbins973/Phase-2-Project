import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseContainer(props) {

    const {wellnessData} = props

    const renderExercises = wellnessData.map(exercise => 
    
    <ExerciseCard 
    key={exercise.id}
    exercise={exercise}
    />)

    return <div>
        {renderExercises}
    </div>
}

export default ExerciseContainer