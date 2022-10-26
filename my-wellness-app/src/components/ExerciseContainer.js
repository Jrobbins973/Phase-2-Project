import React, {useState} from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseContainer(props) {
    const[details, setDetails] = useState(false)
    const {exerciseData} = props
    
    const toggleFlip  = () => {
        setDetails(!details)
    }


    const renderExercises = exerciseData.map(exercise => 
    
    <ExerciseCard
    details={details}
    toggleFlip={toggleFlip}
    // key={exercise.id}
    exercise={exercise}
    />)

    return <div>
        {renderExercises}
    </div>
}

export default ExerciseContainer