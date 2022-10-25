import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseContainer(props) {

    const {exerciseData} = props

    const renderExercises = exerciseData.map(exercise => 
    
    <ExerciseCard 
    key={exercise.id}
    exercise={exercise}
    />)

    return <div>
        {renderExercises}
    </div>
}

export default ExerciseContainer