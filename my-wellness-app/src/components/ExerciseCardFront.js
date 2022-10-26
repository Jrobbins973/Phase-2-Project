import React, {useState} from "react";
import { Card, Icon, Image, Button, } from 'semantic-ui-react'

function ExerciseCardFront(props){
    const {exercise}= props

    const[ toggleButton, setToggleButton]= useState(false)
    

function handleToggle(){
        setToggleButton(!toggleButton)
    }


return <Card>
    <Image src={exercise.exercise_image} />
    <Card.Content>
    <Card.Header>{exercise.exercise_name}</Card.Header>
    <Card.Meta>
        {exercise.muscle_group}
    </Card.Meta>
    </Card.Content>
    <Card.Content extra>

    
    <Button onClick={handleToggle} color= {toggleButton ? "blue" : "grey"}>
        {toggleButton ? "I've done this exercise today! Yay" : "I need to do this exercise!"}
    </Button>
    

    </Card.Content>
</Card>
}

export default ExerciseCardFront