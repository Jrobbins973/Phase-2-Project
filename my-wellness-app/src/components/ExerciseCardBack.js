import React from "react";
import { Card, Icon, Image, } from 'semantic-ui-react'

function ExerciseCardBack(props){
    const {exercise}= props

    const createSteps= exercise.description.map((exerciseStep) => {
    return <li>{exerciseStep}</li>})
    
    //The steps are not rendering individually, lets find out how to fix that.
    return <Card>
    <Card.Content>
    <Card.Header>
        <h2>
            {exercise.exercise_name}
        </h2>
        </Card.Header>
    <Card.Meta>
    </Card.Meta>
        <ol>
            {createSteps}
        </ol>
    </Card.Content>
        {exercise.duration}
        
    <Card.Content extra>

    
    {/* <Button onClick={handleToggle} >
         {/* Favorite this for Later Insert Star icon */}
     {/* </Button> */}
    

    </Card.Content>
</Card>
}

export default ExerciseCardBack