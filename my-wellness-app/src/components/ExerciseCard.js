import React, {useState} from "react";
import ExerciseCardBack from "./ExerciseCardBack";
import { Card, Icon, Image, Button} from 'semantic-ui-react'

function ExerciseCard(props){
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

    
    <Button onClick={handleToggle} >
        {toggleButton ? <Button color= 'blue'>I've done it! Yay</Button> : "I need to do this exercise!"}
    </Button>
    

    </Card.Content>
</Card>
}

//     const [cardFlip, setCardFlip] = useState(true)
//     const {exercise} = props
    

//     function toggleFlip(){
//         setCardFlip(!cardFlip)
//     }




// return  <div onClick={toggleFlip} class="ui centered card">

    

//     <div class="image">
//     <img src={exercise.exercise_image}/>
//     </div>
//     <div class="content">
//     <a class="header">{exercise.exercise_name}</a>
//     <div class="meta">
//     <div class="extra content">
//     <h3 class="left floated like">
//     <i class="like icon"></i>
//     Like
//     </h3>
//     <h3 class="right floated star">
//     <i class="star icon"></i>
//     Favorite
//     </h3>
//     </div>
//     </div> 
//     </div>
//     <div class="extra content">
//     </div>

//     {/* <h1>Hi</h1> */}




// </div>



export default ExerciseCard