import React, {useState} from "react";
import ExerciseCardBack from "./ExerciseCardBack";


function ExerciseCard(props){

    const [cardFlip, setCardFlip] = useState(true)
    const {exercise} = props
    

    function toggleFlip(){
        setCardFlip(!cardFlip)
    }




return  <div onClick={toggleFlip} class="ui centered card">

    

    <div class="image">
    <img src={exercise.exercise_image}/>
    </div>
    <div class="content">
    <a class="header">{exercise.exercise_name}</a>
    <div class="meta">
    <div class="extra content">
    <span class="left floated like">
    <i class="like icon"></i>
    Like
    </span>
    <span class="right floated star">
    <i class="star icon"></i>
    Favorite
    </span>
    </div>
    </div> 
    </div>
    <div class="extra content">
    </div>

    {/* <h1>Hi</h1> */}




</div>

}

export default ExerciseCard