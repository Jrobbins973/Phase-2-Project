import React from "react";
import { Card, Icon, Image, Button, } from 'semantic-ui-react'
import ExerciseCardBack from "./ExerciseCardBack";
import ExerciseCardFront from "./ExerciseCardFront";

function ExerciseCard(props){
    const {exercise}= props

    
return (
    <div>
        <h2>This is the Exercise Card</h2>
        <ExerciseCardFront exercise={exercise} key={exercise.id}/>
        <ExerciseCardBack exercise={exercise}/>
    </div>
)
}



export default ExerciseCard