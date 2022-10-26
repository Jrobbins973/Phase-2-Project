import React, {useState} from "react";
import { Card, Icon, Image, Button, } from 'semantic-ui-react'
import ExerciseCardBack from "./ExerciseCardBack";
import ExerciseCardFront from "./ExerciseCardFront";


function ExerciseCard(props){
    const[details, setDetails] = useState(false)
    const {exercise}= props

const toggleFlip  = () => {
        setDetails(!details)
    }
    
return (
    <div>
        {/* <h2>This is the Exercise Card</h2> */}
        {details? <ExerciseCardBack exercise={exercise} toggleFlip = {toggleFlip}/> 
        : 
        <ExerciseCardFront exercise={exercise} toggleFlip = {toggleFlip}/>  }
    </div>
)
}



export default ExerciseCard