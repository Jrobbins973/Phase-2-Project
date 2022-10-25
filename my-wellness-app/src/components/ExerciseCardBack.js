import React from "react";
import { Card, Icon, Image, } from 'semantic-ui-react'

function ExerciseCardBack(props){
    const {exercise}= props
    return <Card>
    
    <Card.Content>
    <Card.Header>{exercise.exercise_name}</Card.Header>
    <Card.Meta>
        {exercise.muscle_group}
    </Card.Meta>
    </Card.Content>
    <Card.Content extra>

    
    {/* <Button onClick={handleToggle} >
        {/* Favorite this for Later Insert Star icon */}
    {/* </Button> */}
    

    </Card.Content>
</Card>
}

export default ExerciseCardBack