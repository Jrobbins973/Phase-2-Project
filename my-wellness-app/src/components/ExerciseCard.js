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
    <h3 class="left floated like">
    <i class="like icon"></i>
    Like
    </h3>
    <h3 class="right floated star">
    <i class="star icon"></i>
    Favorite
    </h3>
    </div>
    </div> 
    </div>
    <div class="extra content">
    </div>

    {/* <h1>Hi</h1> */}




</div>

}

export default ExerciseCard