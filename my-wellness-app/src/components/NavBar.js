import React, {useState, useEffect} from "react";  
import ExerciseContainer from "./ExerciseContainer";
import 'semantic-ui-css/semantic.min.css';

const wellnessUrl = 'http://localhost:3000/exercises'



function NavBar (props){

const [wellnessData, setWellnessData] = useState([])

useEffect(() => {
    fetch(wellnessUrl)
    .then(res => res.json())
    .then(setWellnessData)
},[])

    return (
        <>
    <div class="ui pointing menu">
    <a class="item active">
    Home
    </a>
    <a class="item">
    Exercises
    </a>
    <a class="item">
    Equipment
    </a>
    <div class="right menu">
    <div class="item">
        <div class="ui transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
        </div>
    </div>
    </div>
</div>
<div class="ui segment">
    <p></p>
    
</div>
<ExerciseContainer wellnessData = {wellnessData} />
</>
)


}

export default NavBar