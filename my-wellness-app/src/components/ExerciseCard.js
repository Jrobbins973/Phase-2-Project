import React, {useState} from "react";
import { Card, Icon, Image, Button, } from 'semantic-ui-react'
import ExerciseCardBack from "./ExerciseCardBack";
import ExerciseCardFront from "./ExerciseCardFront";


function ExerciseCard(props){
    const {toggleFlip} = props
    const {exercise}= props
    const {details} = props


    
return (
    <div>
        {/* <h2>This is the Exercise Card</h2> */}
        {details? <ExerciseCardFront exercise={exercise}  toggleFlip={toggleFlip}/> : <ExerciseCardBack exercise={exercise} toggleFlip={toggleFlip}/> }
    </div>
)
}



export default ExerciseCard